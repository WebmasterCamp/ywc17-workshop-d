import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './views/Home';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Review } from './views/Review';
import { AddRequest } from './views/Request/add';
import { ViewRequest } from './views/Request/view';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <header>This is header</header>
      <main className="flex-grow">
        <Router>
          <Switch>
            <Route path="/request/:id">
              <ViewRequest />
            </Route>
            <Route path="/request/add">
              <AddRequest />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
          </Switch>
        </Router>
      </main>
      <footer>This is footer</footer>
    </div>
  );
};

export default App;
