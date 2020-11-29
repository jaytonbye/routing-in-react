import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Films from './Films'
import People from './People'

function App(props) {
  return (
    <Fragment>
      <h1>My sweet API from Studio wiggly jiggly</h1>
    <Router>
      <Fragment>
        <Link to='/'>Home</Link><br />
        <Link to='/people'>People</Link><br />
        <Link to='/films'>Films</Link><br />
        <br />
        <Switch>
          <Route exact path='/' component={null} /> {/* is this the correct way to do the homepage? It works... */}
          <Route exact path='/films' component={Films} />
          <Route exact path='/people' component={People} />
        </Switch>
      </Fragment>
    </Router>
    </Fragment>
  );
}

export default App;
