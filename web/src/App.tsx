import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './views/Home';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { AddRequest } from './views/Request/add';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>This is header</header>
      <main className="flex-grow">
        <Router>
          <Switch>
            <Route path="/request/add">
              <AddRequest />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
      <footer>This is footer</footer>
    </div>
  );
};

export default App;
