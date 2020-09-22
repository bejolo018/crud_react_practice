import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Views/Home'
import AddName from './Components/AddName'
import EditName from './Components/EditName'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddName}  />
          <Route path="/edit/:id" component={EditName}  />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
