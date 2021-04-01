import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie, index) => <MovieCard 
      key={index}
      title={movie.title}
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      poster={movie.poster}
    />)
  }


  render() {
 
    return (
      <div id="movie-showcase">
        <li>{this.generateMovieCards()}</li>
      </div>
    )
  }
}

export default MovieShowcase;


