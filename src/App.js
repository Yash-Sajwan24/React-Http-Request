import "./App.scss";
import Search from "./components/SearchBar/Search";
import Movies from "./components/Movies/Movies";
import { Fragment, useState } from "react";


const API_URL = 'https://www.omdbapi.com?apikey=3485b64c';
// const API_URL = "https://swapi.dev/api/films/";

const App = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);



  async function fetchMovies(movie) {
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${movie}`);
    const data = await response.json();
    const transformedResults = data.Search.map((data, i) => {
      return {
        title: data.Title,
        id: i,
        details: data.imdbID,  
        date: data.Year,
        image: data.Poster, 
      };
    });
    setAllMovies(transformedResults);
    setLoading(false);
  }

  const data = (movie) => {
    fetchMovies(movie);
  };

  return (
    <Fragment>
      <Search item={data} />
      <div className='movcontainer card'>
      {!loading && allMovies.length > 0 && <Movies alldata={allMovies} />}
      {!loading && allMovies.length === 0  && <p>No data found.</p> }
      {loading && <p>Loading....</p>}
      </div>
    </Fragment>
  );
};

export default App;
