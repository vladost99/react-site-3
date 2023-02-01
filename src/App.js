import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <Router>
      <GlobalStyle/>

      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
