import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard';
import movieData from './data';

export default class MovieShowcase extends Component {
  render() {
    return (
      <div id='movie-showcase'>
        {movieData.map((movie,index) => (
        <MovieCard 
          key={index} 
          title={movie.title} 
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
          poster={movie.poster}
        />
        ))}
      </div>
    )
  }
}

