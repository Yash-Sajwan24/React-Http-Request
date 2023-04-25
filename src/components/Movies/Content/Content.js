import { Fragment } from 'react';
import './Content.scss';

const Content = (props) => {

    function clickHandler() {
        props.home(true);
    }

    return (
       <Fragment>
         <div className='selected_movie'>
             <h1 className='title'>{props.movieItem.title}</h1>
            <h2 className='details'>{props.movieItem.details}</h2>
            <h2 className='date'>{props.movieItem.date}</h2>
            <img src={props.movieItem.image!== 'N/A' ? props.movieItem.image: 'https://via.placeholder.com/400'} alt={props.title } /> 
            <button onClick={clickHandler}>Go Back</button>
            </div>
            
       
            
       </Fragment>
           
       
    )
}

export default Content;