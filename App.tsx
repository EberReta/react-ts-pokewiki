import * as React from 'react';
import PokemonDetails from './components/PokemonDetails';
import PokemonList from './components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  const [pokemon, setPokemon] = React.useState();

  return (
    <div>
      <Router>
        <Header />
        <div className="container my-4">
          <Switch>
            <Route path="/:pokemon" component={PokemonDetails} />
            <Route exact path="/" component={PokemonList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
