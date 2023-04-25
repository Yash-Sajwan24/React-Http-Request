import "./App.scss";
import Search from "./components/SearchBar/Search";
import Movies from "./components/Movies/Movies";
import { Fragment, useState } from "react";


const API_URL = 'https://www.omdbapi.com?apikey=3485b64c';
// const API_URL = "https://swapi.dev/api/films/";

const App = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  async function fetchMovies(movie) {
    setLoading(true);
    setError(false);
    try{
      const response = await fetch(`${API_URL}&s=${movie}`);
      if(!response.ok){
        throw new Error(true);
      }
    const data = await response.json();
    console.log(data);
    
      const transformedResults = data.Search.map((data, i) => {
        return {
          title: data.Title,
          id: i,
          details: data.Type,  
          date: data.Year,
          image: data.Poster, 
        };
      });
      setAllMovies(transformedResults);
    }catch(error){
        setError(error);
    }
  
    setLoading(false);
  }

  const data = (movie) => {
    fetchMovies(movie);
  };

  let content = <p>Found no movies.</p>;

  if(allMovies.length > 0){
    content =  <Movies alldata={allMovies} />
  }

  if(error){
    content = <p>Something went wrong.</p>
  }

  if(loading){
    content = <p>Loading....</p>;
  }


  return (
    <Fragment>
      <Search item={data} />
      <div className='movcontainer card'>{content}</div>
    </Fragment>
  );
};

export default App;
