import "./Search.scss";
import { useState } from "react";

const Search = (props) => {
  const [movie, setMovie] = useState("");

  const onClickHandler = () => {
    props.item(movie);
  };

  return (
    <div className="container">
      <input
        value={movie}
        onChange={(e) => {
          setMovie(e.target.value);
        }}
        className="movie-search card"
        type="text"
        placeholder="Enter the name of the movie"
      ></input>
      <button onClick={onClickHandler} className="btn card">
        Search
      </button>
    </div>
  );
};

export default Search;
