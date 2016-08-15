import 'babel-polyfill'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import expressGraphQL from 'express-graphql'
import ReactDOM from 'react-dom/server'
import schema from './data/schema'
import Router from './routes'
import assets from './assets'
import { port } from './config'

const server = global.server = express()

global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

server.use(express.static(path.join(__dirname, 'public')))
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: { request: req },
  pretty: process.env.NODE_ENV !== 'production',
})))

server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200
    const template = require('./views/index.jade')
    const data = { title: '', description: '', css: '', body: '', entry: assets.main.js }
    const css = []
    const context = {
      insertCss: styles => css.push(styles._getCss()),
      onSetTitle: value => (data.title = value),
      onSetMeta: (key, value) => (data[key] = value)
    }
    await Router.dispatch({ path: req.path, query: req.query, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component)
      data.css = css.join('')
    })
    res.status(statusCode)
    res.send(template(data))
  } catch (err) {
    next(err)
  }
})

server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`)
})
