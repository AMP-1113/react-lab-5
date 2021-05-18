import React from 'react';
import './App.css';
import Coke from './SodaComponents/Coke';
import Pepsi from './SodaComponents/Pepsi';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">




        {/* <Router>
          <h1>Soda Wars</h1>
          <nav>
            <Link to="/coke">Coke</Link> {'     '}
            <Link to="/pepsi">Pepsi</Link>
          </nav>

          <Switch>
            <Route path="/coke" >
              <Coke />
            </Route>
            <Route path="/pepsi" >
              <Pepsi />
            </Route>
            <Route path="/">
              <Redirect to="/coke" />
            </Route>
          </Switch>
        </Router> */}
    </div>
  );
}

export default App;
