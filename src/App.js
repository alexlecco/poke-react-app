import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    console.log(data)
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Poke React App</h1>
      <div className="pokemon-container">

      </div>
      <button className="load-more">cargar más</button>
    </div>
  );
}

export default App;
