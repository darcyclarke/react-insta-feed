import React from 'react'
import Router from 'react-routing/src/Router'
import fetch from './core/fetch'
import App from './components/App'
import r from 'r-dom'

const routes = [
  require('./routes/home')
]

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next()
    return component && r(App, { context: state.context }, component)
  })

  routes.forEach(route => {
    on(route.path, route.action)
  })

  on('*', async (state) => {
    const query = `/graphql?query={content(path:"${state.path}"){path,title,content,component}}`
    const response = await fetch(query)
    const { data } = await response.json()
    return data && data.content
  })

})

export default router
