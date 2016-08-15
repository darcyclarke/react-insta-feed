import React from 'react'
import Home from './Home'
import fetch from '../../core/fetch'
import r from 'r-dom'

export const path = '/'
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}')
  const { data } = await response.json()
  state.context.onSetTitle('React.js Starter Kit')
  return r(Home)
}
