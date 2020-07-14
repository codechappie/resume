import React from 'react';
import { BrowserRouter as Router,
         Route, Switch } from 'react-router-dom'
import Main from './Main';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
