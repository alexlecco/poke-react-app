import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const createPokemonObject = results => {
    results.forEach(async pokemon => {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await result.json();
      
      setAllPokemons(currentList => [...currentList, data]);
    })
  }

  const getAllPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();
    setLoadMore(data.next);

    createPokemonObject(data.results);
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Poke React App</h1>
      <div className="pokemon-container">
        {allPokemons.map(pokemon => <li>{pokemon.name}</li>)}
      </div>
      <button className="load-more">cargar más</button>
    </div>
  );
}

export default App;
