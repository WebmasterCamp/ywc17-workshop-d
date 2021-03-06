import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useHistory,
} from 'react-router-dom';
import { Home } from './views/Home';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Review } from './views/Review';
import bell from './assets/svgs/bell.svg';
import me from './assets/svgs/logome.svg';
import { AddRequest } from './views/Request/add';
import { ViewRequest } from './views/Request/view';
import { Activites } from './views/Activites';
import { useLocalStorage } from './hooks/localstorage';
import { ViewOffer } from './views/Offer/view';
import { auth } from 'firebase';
import './App.css';
import { ViewDeal } from './views/Deal';
import { useAuth } from './hooks/firebase';

const App: React.FC = () => {
  const [data, setData] = useAuth();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex p-1 bg-orange-theme justify-around items-center">
        <img
          onClick={() => {
            window.location.href = '/';
          }}
          className="h-4 w-h-4 self-start bg-transparent m-1"
          src={me}
          style={{
            marginRight: 'auto',
          }}
          alt=""
        />
        {/* <p className="ml-2 text-base text-white mr-3">hello toey,</p> */}
        {window.location.pathname == '/login' ? null : data == null ? (
          <span
            onClick={() => {
              window.location.href = '/login';
            }}
            style={{
              fontSize: '16px',
              color: 'white',
            }}
          >
            LOGIN
          </span>
        ) : (
          <React.Fragment>
            <img
              className="h-5 w-5 mr-3"
              src={bell}
              onClick={() => (window.location.href = '/activities')}
              alt=""
            />
            <p
              // src={me}
              className="text-white"
              onClick={() => {
                auth().signOut();
              }}
            >
              LOGOUT
            </p>
          </React.Fragment>
        )}
      </header>
      <main className="flex-grow">
        <Switch>
          <Route path="/deals/:id">
            <ViewDeal />
          </Route>
          <Route path="/offer/:id">
            <ViewOffer />
          </Route>
          <Route path="/activities">
            <Activites />
          </Route>
          <Route path="/request/add">
            <AddRequest />
          </Route>
          <Route path="/request/:id">
            <ViewRequest />
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
          <Route>
            <Home />
          </Route>
        </Switch>
      </main>
      <footer className="py-3 bg-orange-theme mt-16">
        <div className="flex flex-col items-center">
          <div
            className=""
            style={{
              backgroundImage: `url(${me})`,
            }}
          ></div>
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
