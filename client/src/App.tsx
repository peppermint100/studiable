import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from './pages';
import CafeDetailPage from './pages/CafeDetailPage';
import PrivateRoute from "./PrivateRoute";
import CafeCreationPage from './pages/CafeCreationPage';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootReducerType } from './redux/reducers/rootReducer';
import GlobalStyles from './GlobalStyles';

const theme = {
  colors: {
    primary : "#773300",
    secondary: "#F2EBE6",
    lightGray: "#AAA6A6",
    silver: "#bdc3c7",
    darkSilver: "#7f8c8d"
  }
}

function App() {
  const currentUser = useSelector((state: RootReducerType) => state.authReducers);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <PrivateRoute exact path="/cafe/create" component={CafeCreationPage} currentUser={currentUser} />
          <PrivateRoute exact path="/cafe/:cafeId" component={CafeDetailPage} currentUser={currentUser} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}


export default App;
