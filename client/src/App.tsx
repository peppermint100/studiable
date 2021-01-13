import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage, CafeCreationPage, CafeDetailPage } from './pages';
import PrivateRoute from "./PrivateRoute";
import {  useSelector } from 'react-redux';
import { RootReducerType } from './redux/reducers/rootReducer';
import { CookiesProvider } from "react-cookie";
import "antd/dist/antd.css";

import "./style/main.css";

function App() {
  const currentUser = useSelector((state: RootReducerType) => state.userReducer)

  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <PrivateRoute exact path="/cafe/create" component={CafeCreationPage} currentUser={currentUser} />
          <PrivateRoute exact path="/cafe/:cafeId" component={CafeDetailPage} currentUser={currentUser} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
