import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('members')
@observer
class Home extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <span>{JSON.stringify(this.props)}</span>
      </div>
    )
  }
}

export default Home