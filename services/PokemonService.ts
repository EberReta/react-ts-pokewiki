const getPokemon = async (url: string) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

const getPokemonByName = async (name: string) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await resp.json();
  return data;
};

const getPokemonList = async (url: string) => {
  const resp = await fetch(url);
  return await resp.json();
};
export default {
  getPokemon,
  getPokemonByName,
  getPokemonList,
};
