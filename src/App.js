import "./App.css";
import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
