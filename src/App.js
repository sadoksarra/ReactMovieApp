import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import Movielist from './components/Movielist';
import LearnMore from './components/LearnMore';
import "./App.css";
import MovieNavbar from './components/MovieNavbar';
import { Route, Routes } from 'react-router-dom';
import Moviecard from './components/Moviecard';


const App = () => {
  const [keyword,setKeyWords] = useState('');
  const [rating,setrating] = useState(1);
	const [movies, setMovies] = useState([        
        {
            "id" : "1",
            "Title": "Creed",
            "rate": "4",
            "description": "Adonis Johnson n'a jamais connu son père, le célèbre champion du monde poids lourd Apollo Creed décédé avant sa naissance.",
            "PosterUrl": "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            "trailer" : "https://www.youtube.com/watch?v=Uv554B7YHk4&pp=ygUNdHJhaWxlciBjcmVlZA%3D%3D"
        },
        {
            "id" : "2",
            "Title": "Babylon",
            "rate": "5",
            "description": "Synopsis détaillé En 1926 à Los Angeles, le cinéma muet bat son plein. Manuel « Manny » Torres (Diego Calva), un immigré d'origine mexicaine, est homme à tout faire pour le studio Kinoscope, et se rêve en assistant réalisateur",
            "PosterUrl": "https://fr.web.img6.acsta.net/pictures/22/12/02/16/03/2536613.jpg",
            "trailer" : "https://youtu.be/5muQK7CuFtY",
        }]);

  const addNewMovie = (newMovie) => {
    setMovies([...movies,newMovie])
  }    
  
  const searchMovie = (text) => {
    setKeyWords(text)
  }  

  const rateMovie = (num) => {
    setrating(num)
  }  

 

	
	return (
   <div>
 
    <MovieNavbar searchMovie={searchMovie} rateMovie={rateMovie}></MovieNavbar>
    <AddMovie  addNewMovie={addNewMovie}></AddMovie>

      <Routes>
       <Route path="/"
        element={<div className='container-fluid movie-app'>
          <div className='row'>
              <Movielist movies = {movies.filter(elm => elm.Title.toLowerCase().includes(keyword.toLowerCase().trim()) && elm.rate>= rating)}></Movielist>
          </div></div>} /> 
        <Route path="/learnmore/:id" element={<LearnMore movies={movies} />} />
        <Route path="/moviecard" element={<Moviecard />} />
      </Routes>
    
  </div>
      

  

  
   
    

  
        
        
     
        
     
   
	);
};

export default App;