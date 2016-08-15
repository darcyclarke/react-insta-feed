import React from 'react'
import styles from './header.styles'
import r from 'r-dom'

class Header extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    r.header({ className: 'header' }, [])
    )
  }
}

export default Header
