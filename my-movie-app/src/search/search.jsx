import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './search1.css';

const api = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWFkOGJhMjk0NTg0MGRjMmU1YzMwMzVkNzJjMzA0NSIsInN1YiI6IjY2Njc4YjM2NDU4NjlmM2U2Njg1YTY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rbj-cNzzmODcOOr9f6pgtkkhTIpaHcdguLUBB-MdAaw';

const searchMovies = (apiKey, query, setMovies) => {
  const url = 'https://api.themoviedb.org/3/search/movie';
  const params = {
    query: query,
    include_adult: 'false',
    language: 'en-US',
    page: 1,
  };
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    params: params,
  };
  axios
    .get(url, options)
    .then((response) => {
      setMovies(response.data.results);
    })
    .catch((error) => {
      console.error(error);
    });
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.queryRef = createRef();
  }

  handleSearch = () => {
    const query = this.queryRef.current.value;
    searchMovies(api, query, (movies) => this.setState({ movies }));
  };

  render() {
    return (
      <div className='search1'>
      <div className='search-container'>
        <h1 className='search-header'>Search Your Favorite Movie!</h1>
        <div className='search-input-container'>
          <input
            type='text'
            placeholder='Search a Movie'
            ref={this.queryRef}
            className='search-input'
          />
          <button onClick={this.handleSearch} className='search-button'>
            Search
          </button>
        </div>
        <ul className='movie-list'>
          {this.state.movies.map((movie) => (
            <li key={movie.id} className='movie-item'>
              <Link to={`/movie/${movie.id}`} className='movie-link'>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  }
}

export default Search;
