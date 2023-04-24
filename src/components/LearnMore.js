import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const LearnMore = ({movies}) => {


const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}
const params = useParams();
   console.log(params);
  
const mymovie = movies.find(el => el.id == params.id)  
   console.log(mymovie);

	return (
		<>

	

		<div className='container'  >     
		 <article className="film_details">
			<section className="main_details">
			  <div  className="main_description">
				<p key={mymovie.id}>{mymovie.description}</p>
			  </div>	
			  <div  className="main_trailer">
				<p>{mymovie.trailer}</p>
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
	
				 
			  
		)
	
		
		</>
	);
};

export default LearnMore ;