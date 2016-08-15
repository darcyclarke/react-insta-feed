import React from 'react'
import styles from './nav.styles'
import r from 'r-dom'

class Nav extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    r.nav({ className: 'nav' }, [])
    )
  }
}

export default Nav
