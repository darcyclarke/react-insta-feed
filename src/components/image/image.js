import React from 'react'
import styles from './images.styles'
import r from 'r-dom'

class Image extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    r.div({ className: 'image' }, [])
    )
  }
}

export default Image
