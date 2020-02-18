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
import BollywoodGenre from './components/Genres/BollwoodGenre';
import CountryGenre from './components/Genres/CountryGenre';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/genres" component={GenresPage} />
        <Route exact path="/rock" component={RockGenre} />
        <Route exact path="/pop" component={PopGenre} />
        <Route exact path="/bollywood" component={BollywoodGenre} />
        <Route exact path="/country" component={CountryGenre} />
      </Switch>
    </Router>


  );
}

export default App;
