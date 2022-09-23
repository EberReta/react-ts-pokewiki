import * as React from 'react';
import PokemonService from '../services/PokemonService';

export default function PokemonLink({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = React.useState();
  const [types, setTypes] = React.useState([]);
  const [image, setImage] = React.useState(
    'https://cdn.dribbble.com/users/1771704/screenshots/6124573/pokeball-800x600.gif'
  );

  React.useEffect(() => {
    getPokemon();
  }, [url]);

  const getPokemon = async () => {
    const data = await PokemonService.getPokemon(url);
    setPokemonDetails(data);
    setImage(data.sprites.front_default);

    setTypes(data.types.map((type) => type.type.name));
  };

  return (
    <a href={`/${name}`} className="pokemon-link">
      <div className="d-flex justify-content-start cursor-pointer pokemon-card">
        <img src={image} style={{ with: '100px', height: '100px' }} />
        <div className="">
          <h2>{name}</h2>

          {pokemonDetails && <span>{types.join(', ')}</span>}
        </div>
      </div>
    </a>
  );
}
