import * as React from 'react';
import PokemonLink from './PokemonLink';
import PokemonService from '../services/PokemonService';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [url, setUrl] = React.useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  );
  const [previousUrl, setPreviousUrl] = React.useState();
  const [nextUrl, setNextUrl] = React.useState();
  React.useEffect(() => {
    getPokemons();
  }, [url]);

  const getPokemons = async () => {
    setPokemonList([]);
    setLoading(true);
    const data = await PokemonService.getPokemonList(url);
    setPokemonList(data.results);
    setPreviousUrl(data.previous);
    setNextUrl(data.next);
    setLoading(false);
  };

  return (
    <div>
      <p>Seleccione un pokemon para ver su información</p>

      {loading && <p>Cargando...</p>}
      <div className="row">
        {pokemonList.map((pokemon) => {
          return (
            <div key={pokemon.name} className="col-md-6 col-lg-4">
              <PokemonLink name={pokemon.name} url={pokemon.url} />
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-center">
        <span
          role="button"
          className="btn btn-info"
          onClick={() => setUrl(previousUrl)}
        >
          &#8592; Prev
        </span>
        <span
          role="button"
          className="btn btn-info"
          style={{ marginLeft: '10px' }}
          onClick={() => setUrl(nextUrl)}
        >
          Next &#8594;
        </span>
      </div>
    </div>
  );
}
