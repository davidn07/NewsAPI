import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import NewsState from './NewsContext/NewsState'
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HealthNews from "./Components/HealthNews";
import BusinessNews from "./Components/BusinessNews";
import EntertainmentNews from "./Components/EntertainmentNews";
import GeneralNews from "./Components/GeneralNews";
import ScienceNews from './Components/ScienceNews';
import { faNewspaper, faGenderless, faFileMedicalAlt, faBusinessTime,faCompactDisc, faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <NewsState>
    <div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
        <Link className='navbar-brand' to='/'>
        <FontAwesomeIcon icon={faNewspaper} />
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
          <li>
          <Link className='nav-link' to='/General'>
          <FontAwesomeIcon icon={faGenderless} />{" "}
                General
              </Link>
          </li>  
          <li>
          <Link className='nav-link' to='/Health'>
          <FontAwesomeIcon icon={faFileMedicalAlt} />{" "}

                Health
              </Link>
          </li>
          <li>
          <Link className='nav-link' to='/Business'>
          <FontAwesomeIcon icon={faBusinessTime} />{" "}

                Business
              </Link>
          </li>
          <li>
          <Link className='nav-link' to='/Entertainment'>
          <FontAwesomeIcon icon={faCompactDisc} />{" "}

                Entertainment
              </Link>
          </li>
          <li>
          <Link className='nav-link' to='/Science'>
          <FontAwesomeIcon icon={faFlask} />{" "}

                Science
              </Link>
          </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Details' component={Details} />
        <Route exact path='/Health' component={HealthNews} />
        <Route exact path='/Business' component={BusinessNews} />
        <Route exact path='/Entertainment' component={EntertainmentNews} />
        <Route exact path='/General' component={GeneralNews} />
        <Route exact path='/Science' component={ScienceNews} />
      
      </Switch>
    </div>
    </NewsState>
  );
};

export default App;
