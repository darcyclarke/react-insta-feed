import 'babel-polyfill'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import Router from './routes'
import Location from './core/Location'
import { addEventListener, removeEventListener } from './core/DOMUtils'

const appContainer = document.getElementById('app')
const context = {
  insertCss: styles => styles._insertCss(),
  onSetTitle: value => (document.title = value)
}

function render (state) {
  Router.dispatch(state, (newState, component) => {
    ReactDOM.render(component, appContainer, () => {
  })
}

function run () {
  FastClick.attach(document.body)
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run()
} else {
  document.addEventListener('DOMContentLoaded', run, false)
}
