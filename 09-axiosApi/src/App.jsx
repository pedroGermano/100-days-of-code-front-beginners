import { useEffect, useState } from "react";
import "./App.css";
import axiosInstace from "./helper/axios-instance";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
      axiosInstace
      .get("pokemon")
      .then((res) => {
        setPokemonList(res.data.results);
      })
      .catch((err) => console(err));
      
  }, []);

  return (
   <>
    <div className="App">Front Beginners</div>
    <div>{pokemonList.map((pokemon) => <div>{pokemon.name}</div>)}</div>
   </>
  )
}

export default App;
