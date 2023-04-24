import './Movie.scss';

const Movie = (props) => {
    return (
        <div className='mcontainer'>
            <div className='movie'>
             <h1 className='title'>{props.title}</h1>
            <h2 className='details'>{props.details}</h2>
            <h2 className='date'>{props.date}</h2>
            <img src={props.image!== 'N/A' ? props.image: 'https://via.placeholder.com/400'} alt={props.title } /> 
            
        </div>
        </div>
        
    )
}

export default Movie;
