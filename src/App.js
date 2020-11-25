import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Films from './Films'
import Film from './Film'

function App(props) {
  return (
    <Fragment>
      <h1>Hey</h1>
    <Router>
      <Fragment>
        <Link to='/'>Home</Link><br />
        <Link to='/films'>Films</Link><br />
        <Link to='films/:id'>Specific Film</Link>
        <Switch>
          <Route exact path='/' component={Films} />
          <Route exact path='/films' component={Films} />
          <Route path='/films/:id' component={Film} />
        </Switch>
      </Fragment>
    </Router>
    </Fragment>
  );
}

export default App;
