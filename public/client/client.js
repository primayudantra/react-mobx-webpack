import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// React Apps
import App from '../App'

// Components
import ExampleComponent from '../components/app/AppComponent'

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ExampleComponent}/>
    </Route>
  </Router>,
app)
