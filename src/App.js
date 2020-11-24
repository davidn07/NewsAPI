import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Home";
import TechNews from "./Components/TechNews";
import WallStreet from "./Components/WallStreet";
import Details from "./Components/Details";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
        <Link className='navbar-brand' to='/'>
          NewsApp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/tech'>
                Tech Crunch
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/wallstreet'>
                Wall Street
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Details' component={Details} />
        <Route exact path='/tech' component={TechNews} />
        <Route exact path='/wallstreet' component={WallStreet} />
      </Switch>
    </div>
  );
};

export default App;
