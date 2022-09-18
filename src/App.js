
import React from "react";
import "./App.css";
import HomePages from "./home_pages/HomePages";
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Details from './Details/Details';



function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact-path="/" component={HomePages}></Route>
        <Route exact-path="/details" component={Details}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
