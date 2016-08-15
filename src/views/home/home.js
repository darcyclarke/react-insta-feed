import React from 'react'
import r from 'r-dom'

class Home extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    r.div({ className: 'home' }, [
      r.div({ className: 'home__wrapper' }, [])
    ])
    )
  }
}

export default Home
