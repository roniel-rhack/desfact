import React from 'react';
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./pages/home";

const App = () => {
  return (
  <HashRouter>
    <Switch>
      <Route path={Home.path} component={Home.component} />
    </Switch>
  </HashRouter>
  );
};

export default App;
