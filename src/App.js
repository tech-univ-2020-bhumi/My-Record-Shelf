/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import GenresPage from './components/GenresPage';
import RockGenre from './components/Genres/RockGenre';
import PopGenre from './components/Genres/PopGenre';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/genres" component={GenresPage} />
        <Route exact path="/rock" component={RockGenre} />
        <Route exact path="/pop" component={PopGenre} />
        {/* // <Route exact path="/bollywood" component={GenresPage} />
        // <Route exact path="/country" component={GenresPage} /> */}
      </Switch>
    </Router>


  );
}

export default App;
