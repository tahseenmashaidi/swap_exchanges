import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./container/home/home";
import AddToken from "./container/add-token";

function App() {
  return (
      <Switch>
          <Route path="/" exact component={Home} />
      </Switch>
  );
}

export default App;
