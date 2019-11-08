import 'bulma/css/bulma.min.css'
import _ from 'lodash'

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import Home from './pages/Home'
import Play from './pages/Play'
import Over from './pages/Over'
import Settings from './pages/Settings'

@inject('members')
@observer
class MemberRequiredRoute extends React.Component {
  render() {
    return (
      <Route {...this.props}>
        { this.props.members.isEmptyMembers && (<Redirect to="/settings" />) }
        { this.props.children }
      </Route>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/play">Play</Link></li>
            <li><Link to="/over">Over</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </div>
        <Switch>
          <MemberRequiredRoute path="/" exact>
            <Home />
          </MemberRequiredRoute>
          <MemberRequiredRoute path="/play">
            <Play />
          </MemberRequiredRoute>
          <MemberRequiredRoute path="/over">
            <Over />
          </MemberRequiredRoute>
          <Route path="/settings">
            <Settings />
          </Route>
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    )
  }   
}
