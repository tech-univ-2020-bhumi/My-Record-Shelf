/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './components/HomePage';
// import GenresPage from './'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/genres" component={GenresPage} /> */}
      </Switch>
    </Router>


  );
}

export default App;
