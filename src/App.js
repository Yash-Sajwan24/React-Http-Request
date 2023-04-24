import "./App.scss";
import Search from "./components/SearchBar/Search";
import Movies from "./components/Movies/Movies";
import { Fragment, useState } from "react";

const Dummy_Data = [
  {
    title: "batman city",
    id: "1",
    date: "2018",
    details: "hello",
  },
  {
    title: "spiderman",
    id: "2",
    date: "2020",
    details: "hello",
  },
  {
    title: "assassin creed",
    id: "3",
    date: "1019",
    details: "hello",
  },
];

// const API_URL = 'https://www.omdbapi.com?apikey=3485b64c';
const API_URL = "https://swapi.dev/api/films/";

const App = () => {
  const [allMovies, setAllMovies] = useState(Dummy_Data);

  async function fetchMovies() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const transformedResults = data.results.map((data) => {
      return {
        title: data.title,
        id: data.episode_id,
        details: data.opening_crawl,
        date: data.release_date,
      };
    });
    setAllMovies(transformedResults);
  }

  const data = (movie) => {
    fetchMovies();
  };

  return (
    <Fragment>
      <Search item={data} />
      <Movies alldata={allMovies} />
    </Fragment>
  );
};

export default App;
