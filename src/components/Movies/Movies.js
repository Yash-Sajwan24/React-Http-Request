import './Movies.scss';
import Movie from './Movie/Movie';
import { Fragment } from 'react';

const Movies = (props) => {
    return (
        <Fragment>
        <div className='movcontainer card'>
            {props.alldata.map((movie) => {
                return <Movie title= {movie.title} details={movie.details} date= {movie.date} />;
            })}           
        </div>
        </Fragment>
       
    )
}

export default Movies;