import React from "react";
import "./Card.css";
import StarRatingComponent from 'react-star-rating-component';
import { Link} from 'react-router-dom';

const Moviecard = ({movie}) => {

  return (

 <div className="card">
  <img src={movie.PosterUrl} width="300"
   height="400" alt="moviePoster" class="card__image" />
  <div className="card__overlay">
    <div className="overlay__text Title">
      <h5>{movie.Title}</h5>
     <div className="Description"> 
      <div>{movie.description}    <Link to={`/learnmore/${movie.id}`}>learnmore</Link>
     </div>
     </div> 
      
     <StarRatingComponent className="rating"
        name="star" /* name of the radio input, it is required */
        value={movie.rate} /* number of selected icon (`0` - none, `1` - first) */
        editing={false} /* is component available for editing, default `true` */
      />

      <a href="#" className="button">Watch Now</a>
    </div>
  </div>
</div> 
  
  );

}

export default Moviecard ;

