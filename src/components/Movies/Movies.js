import './Movies.scss';
import Movie from './Movie/Movie';
import { Fragment, useState } from 'react';
import Content from './Content/Content';

const Movies = (props) => {

    const [template, setTemplate] = useState(true);
    const [clickedMovie, setClickedMovie] =useState({});

    const popup = (e) => {
        setTemplate(false);
        setClickedMovie(e);
    }

    const homepage = () => {    
        setTemplate(true);
        setClickedMovie({});
    }

    let content;


    if(template){
        content = props.alldata.map((movie) => {
            return <Movie title= {movie.title} details={movie.details} date= {movie.date} image = {movie.image} click = {popup} />;
        })
    }
    else{
        content = <Content movieItem ={clickedMovie}  home={homepage}/>
    }


    return (
        <Fragment>
                 {content}    
        </Fragment>
       
    )
}

export default Movies;