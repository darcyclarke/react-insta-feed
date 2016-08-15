import React from 'react'
import styles from './footer.styles'
import r from 'r-dom'

class Footer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    r.footer({ className: 'footer' }, [])
    )
  }
}

export default Footer
