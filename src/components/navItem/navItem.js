import React from 'react'
import styles from './navItem.styles'
import r from 'r-dom'

class NavItem extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    r.div({ className: 'navItem' }, [])
    )
  }
}

export default NavItem
