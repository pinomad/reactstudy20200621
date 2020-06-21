import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SigninPage from './pages/signin'
import HomePage from './pages/home'
import ErrorPage from './pages/error'
import TodoPage from './pages/todo'
import GlobalNavbar from './components/global-navbar'
import GlobalStyles from './components/global-styles'
function App() {
  return (
    <Router>
      <GlobalStyles />
      <GlobalNavbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/todo" component={TodoPage}></Route>
        <Route path="/signin" component={SigninPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </Router>
  )
}

export default App
