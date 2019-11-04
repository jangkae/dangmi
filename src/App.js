import 'bulma/css/bulma.min.css'
import _ from 'lodash'

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Play from './pages/Play'
import Over from './pages/Over'
import Settings from './pages/Settings'

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
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/over">
            <Over />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    )
  }   
}
