import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import styles from './Home.sass'
import r from 'r-dom'

function Home () {
  return (
  r.div({className: styles.root}, [
    r.div({className: styles.container}, [
      r.h1('Instagram Feed', {className: styles.title})
    ])
  ])
  )
}

export default withStyles(Home, styles)
