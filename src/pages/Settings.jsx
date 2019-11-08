import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'


@inject('members')
@observer
class Settings extends Component {
  @observable registerView = false

  componentDidMount = () => {
    this.registerView = this.props.members.isEmptyMembers
  }

  addMember = e => {
    e.preventDefault()

    const name = this.registerForm.querySelector('[name=name]').value
    const maxScore = parseInt(this.registerForm.querySelector('[name=maxScore]').value, 10)
    if (!name || !maxScore) {
      alert('입력제대로')
      return
    }

    this.props.members.addMember(name, maxScore)
  }

  render() {
    return (
      <div>
        {this.props.members.memberList.map(member => (
          <p key={member.id}>{JSON.stringify(member)}</p>
        ))}
        <form ref={ref => this.registerForm = ref} onSubmit={this.addMember}>
          <input className="input" type="text" name="name" />
          <input className="input" type="text" name="maxScore" />
          <button className="button" type="submit">등록</button>
        </form>
      </div>
    )
  }
}

export default Settings