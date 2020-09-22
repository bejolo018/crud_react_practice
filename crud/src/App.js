import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser}  />
          <Route path="/edit/:id" component={EditUser}  />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
