import * as React from 'react';
import { useParams } from 'react-router-dom';
import PokemonService from '../services/PokemonService';
import statsIcons from '../StatsIcons';

export default function PokemonDetails() {
  const { pokemon } = useParams();

  const [pokemonDetails, setPokemonDetails] = React.useState({
    sprites: { front_default: '' },
    stats: [],
    weight: '',
    height: '',
    types: [],
    abilities: [],
  });

  React.useEffect(() => {
    getPokemon();
  }, [pokemon]);

  const getPokemon = async () => {
    const data = await PokemonService.getPokemonByName(pokemon);
    setPokemonDetails(data);
  };

  return (
    <div>
      <div></div>

      <h1 className="text-center">{pokemon}</h1>
      {pokemon && !pokemonDetails ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div>
          <div className="text-center">
            <img
              className="pokemon-img"
              src={pokemonDetails.sprites.front_default}
              style={{ with: '150px', height: '150px' }}
            />
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 mb-4 mb-lg-5">
              <div className="stats-icons d-flex justify-content-around">
                {pokemonDetails.stats.map((stat) => {
                  return (
                    <div title="asdas" key={stat.stat.name}>
                      <img src={statsIcons[stat.stat.name]} /> {stat.base_stat}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 text-center">
              <div>
                <b>Weight</b>
                <p>{pokemonDetails.weight}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <div>
                <b>Height</b>
                <p>{pokemonDetails.height}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center">
              <div>
                <p className="mb-0 text-center">
                  <b className="">Types</b>
                </p>
                <p>
                  {' '}
                  {pokemonDetails && (
                    <span>
                      {pokemonDetails.types.map((type) => (
                        <li key={type.type.name}>{type.type.name}</li>
                      ))}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center">
              <div>
                <p className="mb-0 text-center">
                  <b>Abilities:</b>
                </p>
                <ul>
                  {pokemonDetails.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
