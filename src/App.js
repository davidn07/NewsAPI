import React from "react";
import { Route, Switch } from "react-router-dom";
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
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <NewsState>
      <NavBar />
    <div>
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
