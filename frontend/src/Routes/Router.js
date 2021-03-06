import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Search from "../Components/Search";
import TV from "../Components/TV";
import Detail from "../Components/Detail";
import Login from "../Components/Login"
import SignUp from "../Components/SignUp";

function Router() {
  const jwtToken = useSelector(state => state.auth.jwtToken);
  const isLogin = jwtToken === "" ? false : true;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/TV" component={TV} />
          <PrivateRoute path="/login" isLogin={isLogin} component={Login} />
          <PrivateRoute path="/signup" isLogin={isLogin} component={SignUp} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/show/:id" component={Detail} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;