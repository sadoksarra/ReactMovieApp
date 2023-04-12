import React from 'react';
import Moviecard from './Moviecard';

const Movielist = (props) => {
	return (
		<>
			{props.movies.map((movie, key) => (
				<div className='d-flex justify-content-start m-3'>
					  <Moviecard movie={movie}></Moviecard>
			    </div>	  
			))}
		</>
	);
};

export default Movielist ;