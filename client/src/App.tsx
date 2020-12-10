import React from 'react';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from './pages';
import CafeDetailPage from './pages/CafeDetailPage';

const GlobalStyle = createGlobalStyle`
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, 
  form, fieldset, input, p, blockquote, table, th, td, embed, object {
    width: 100%;
    font-family: "Roboto";
    padding: 0;
    margin: 0; 
    overflow-x: hidden; 
    box-sizing: border-box;
    }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    }
  fieldset, img, abbr {
    border: 0;
    }
  address, caption, cite, code, dfn, em, 
  h1, h2, h3, h4, h5, h6, strong, th, var {
    font-weight: normal;
    font-style: normal;
    }
  ul {
    list-style: none;
    }
  caption, th {
    text-align: left;
    }
  h1, h2, h3, h4, h5, h6 {
    font-size: 1.0em;
    }
  q:before, q:after {
    content: '';
    }
  a, ins {
    text-decoration: none;
    }
  button, input{
    all: unset;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/cafe/:cafeId" component={CafeDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
