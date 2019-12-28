import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './views/Home'

const App: React.FC = () => {
  return (
    <>
      <header></header>
      <main>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  )
}

export default App
