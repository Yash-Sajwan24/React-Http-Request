import './Search.scss';



const Search = (props) => {
    const onClickHandler = () => {
        props.item([]);
    }
    return (
        <div className='container'>
             <input className='movie-search card' type='text' placeholder='Enter the name of the movie'></input>
             <button onClick={onClickHandler} className='btn card'>Search</button>
        </div>
       
    )
}

export default Search;