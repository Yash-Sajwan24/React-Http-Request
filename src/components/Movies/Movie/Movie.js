import './Movie.scss';

const Movie = (props) => {
    return (
        <div className='movie card'>
            <h1 className='title'>{props.title}</h1>
            <h2 className='details'>{props.details}</h2>
            <h2 className='date'>{props.date}</h2>
        </div>
    )
}

export default Movie;
