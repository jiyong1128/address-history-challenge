import React, { useState, useEffect, useContext } from 'react';
import Address from "./Components/Address";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompareTwoAddresses from "./Components/CompareTwoAddresses"
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Switch>
            <Route exact path="/" component={Address} />
            <Route path="/compare" component={CompareTwoAddresses} />
          </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
