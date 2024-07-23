import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './search.css'
const api = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWFkOGJhMjk0NTg0MGRjMmU1YzMwMzVkNzJjMzA0NSIsInN1YiI6IjY2Njc4YjM2NDU4NjlmM2U2Njg1YTY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rbj-cNzzmODcOOr9f6pgtkkhTIpaHcdguLUBB-MdAaw';
const getMovieDetails = (apiKey, movieId, setMovieDetails) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };
  axios
    .get(url, options)
    .then((response) => {
      setMovieDetails(response.data); 
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getMovieDetails(api, id, setMovieDetails);
  }, [id]);
  return (
    <div className='movie-page'>

      
      {movieDetails ? (
        
        <div className='movie-container'>
          <h1 classname='page-header'>Movie Details</h1>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
          <h1 className="movie-title">{movieDetails.title}</h1>
          <p className='movie-details'>{movieDetails.overview}</p>
          <p classname='release-date'>Release Date: {movieDetails.release_date}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Movie;






