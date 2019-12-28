import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './views/Home';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Review } from './views/Review';
import bell from './assets/svgs/bell.svg';
import me from './assets/svgs/user-silhouette.svg';
const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex p-1 bg-orange-theme justify-around items-center">
        <img
          className="h-10 w-10 self-start bg-transparent"
          src="https://brandmark.io/logo-rank/random/pepsi.png"
          alt=""
        />
        <p
          className="ml-2 text-base text-white"
          style={{
            marginRight: 'auto',
          }}
        >
          <span
            style={{
              textTransform: 'uppercase',
              fontSize: '.95rem',
              fontWeight: 'bold',
            }}
          >
            skill
          </span>
          <span
            style={{
              fontSize: '.95rem',
              textTransform: 'uppercase',
            }}
          >
            ' swap
          </span>
        </p>
        {/* <p className="ml-2 text-base text-white mr-3">hello toey,</p> */}
        <img className="h-5 w-5 mr-3" src={bell} alt="" />
        <img className="h-5 w-5" src={me} alt="" />
      </header>
      <main className="flex-grow">
        <Router>
          <Switch>
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
      <footer className="py-3 bg-orange-theme mt-16">
        <div className="flex flex-col items-center">
          <div className="border border-gray-500 w-16 h-16"></div>
          <p
            style={{
              fontSize: '1.5rem',
              color: 'white',
            }}
          >
            SKILL' SWAP
          </p>
          <p
            style={{
              color: 'white',
            }}
          >
            Copyright &copy; skillsswap.com{' '}
            <span className="block text-center">All right reserved</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
