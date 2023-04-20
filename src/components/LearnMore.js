import React from 'react';
import {useNavigate} from 'react-router-dom';

const LearnMore = (props) => {
const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}
   
	return (
		<>

		{props.movies.map((movie,key) => ( 

		<div className='container'  >     
		 <article className="film_details">
			<section className="main_details">
			  <div  className="main_description">
				<p key={movie.id}>{movie.description}</p>
			  </div>	
			  <div  className="main_trailer">
				<p>{movie.trailer}</p>
			  </div>	
				<footer>
					<p>
					Posted on
					<time datetime="2015-05-16 19:00">May 16</time>
					by Sarrah.
					</p>
				</footer>
			</section>
		 <button onClick={goBack}>Back</button>
	  </article>
	  </div>				
	
				 
			  
		))}
	
		
		</>
	);
};

export default LearnMore ;