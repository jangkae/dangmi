import 'bulma/css/bulma.min.css';
import _ from 'lodash';

import React from 'react';

const defaultMember = {
  score: 10,
  current: 10,
  name: 'dangmi'
}

export default class App extends React.Component {
  elList = []
  state = {
    name: 'man',
    memberList: null,
  }

  componentDidMount = () => {
    this.resetMemberList();
  }

  resetMemberList = () => {
    const memberList = _.times(3, () => defaultMember)
    this.setState({ memberList })
  }

  addMemeber = member => {
    const memberList = this.state.memberList.push(member)
    this.setState({memberList})
  }

  removeMember = member => {
    const memberList = _.filter(this.state.memberList, item => item !== member)
    this.setState({memberList})
  }

  applyData = () => {
    this.setState({ memberList: this.state.memberList.map((item, index) => {
      return {
        name: this.elList[index].querySelector('input[name=name]').value,
        score: parseInt(this.elList[index].querySelector('input[name=score]').value, 10),
        current: parseInt(this.elList[index].querySelector('input[name=current]').value, 10),
      }
    })})
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>순번</th>
              <th>이름</th>
              <th>다마(개)</th>
              <th>현재(개)</th>
              <th>남음(%)</th>
              <th>뺌(%)</th>
              <th>1개당(%)</th>
            </tr>
          </thead>
          <tbody>
            { this.state.memberList && this.state.memberList.map((member, index) => (
              <tr key={index} ref={ref => this.elList[index] = ref}>
                <td>{index + 1}</td>
                <td><input className="input" type="text" name="name" placeholder="Text input" defaultValue={member.name} /></td>
                <td><input className="input" type="text" name="score" placeholder="Text input" defaultValue={member.score} /></td>
                <td><input className="input" type="text" name="current" placeholder="Text input" defaultValue={member.current} /></td>
                <td>{(100/member.score).toFixed(2)}%</td>
                <td>{(100/member.score*(member.score-member.current)).toFixed(2)}%</td>
                <td>{(100/member.score*member.current).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="button is-success" onClick={this.applyData}>Apply!</button>
      </div>
    )
  }
}
