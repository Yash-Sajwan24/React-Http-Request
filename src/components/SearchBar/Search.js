import "./Search.scss";
import { useState } from "react";

const Search = (props) => {
  const [movie, setMovie] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    props.item(movie);
  };

  return (
    <div className="container">
      <form onSubmit={onClickHandler}>
      <input
        value={movie}
        onChange={(e) => {
          setMovie(e.target.value);
        }}
        className="movie-search card"
        type="text"
        placeholder="Enter the name of the movie"
      ></input>
      <button type="submit" className="btn card">
        Search
      </button>
      </form>
      
    </div>
  );
};

export default Search;
