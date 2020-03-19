import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Execom from './pages/Execom'
import IEEE from './images/IEEE.png'
import Events from './pages/Events'
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Router>
      <div className="App">
        <nav className="nav">
          <ul>
            <li>
              <img src={IEEE}/>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="dropdown">
              <button class="dropbtn">Societies 
                <i class="fa fa-caret-down"></i>
              </button>
                <div class="dropdown-content">
                    <a href="#">Computer Society</a>
                    <a href="#">Industrial Applications Society</a>
                    <a href="#">Power Energy Society</a>
                    <a href="#">Robotics and Automation Society</a>
                </div>
            </div> 

            <li>
              <Link to="/Events">Events</Link>
            </li>

            <li>
              <Link to="/execom">Execom</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/execom">
            <Execom />
          </Route>

          <Route path="/events">
            <Events />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}
export default App;
