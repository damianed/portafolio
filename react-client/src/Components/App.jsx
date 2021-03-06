import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router'
import HomePage from './HomePage';
import Footer from './Footer';
import NavBar from './HeaderComponent/NavBar';
import Projects from './Projects';

class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <Route name="home" exact path="/" component={HomePage} />
            <Projects />
          </div>
        </Router>
      )
    }
}
export default App;
