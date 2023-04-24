import './Movies.scss';
import Movie from './Movie/Movie';
import { Fragment } from 'react';

const Movies = (props) => {
    return (
        <Fragment>
       
            {props.alldata.map((movie) => {
                return <Movie title= {movie.title} details={movie.details} date= {movie.date} image = {movie.image} />;
            })}           
        </Fragment>
       
    )
}

export default Movies;