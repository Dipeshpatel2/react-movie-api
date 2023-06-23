import React, {useEffect} from "react";
import './App.scss';

const API_URL = 'http://www.omdbapi.com?apikey=f6e1a94';

const App = () => {

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  
    console.log(data.Search)
  }

  useEffect(() =>{
    searchMovies('Spiderman')
  }, []);

  return (
    <div>App</div>
  )
}

export default App




