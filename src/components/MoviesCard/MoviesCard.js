import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

import { SHORT_MOVIE_LENGTH } from '../../config/config';

export default function MoviesCard({ movie, addMovieToFavorite, deleteMovie, favoriteMovies }) {

  const path = useLocation().pathname;

  const [isLikeActive, setIsLikeActive] = useState(true);

  useEffect(() => {
    if (path === '/movies') {
      setIsLikeActive(favoriteMovies.some(i => i.movieId === movie.id))
    }
  }, [favoriteMovies])

  const movieImg = correctImgUrl();

  function correctImgUrl() {
    if (path === '/movies') {
      return `https://api.nomoreparties.co${movie.image.url}`
    } else {
      return movie.image
    }
  }

  function movieDuration() {
    let time = '';
  
    let hours = '';
    let minutes = '';
  
    if (movie.duration < SHORT_MOVIE_LENGTH) {
      minutes = movie.duration;
  
      time = `${minutes}м`
    } else {
      hours = Math.floor(movie.duration / SHORT_MOVIE_LENGTH);
      minutes = movie.duration - hours * SHORT_MOVIE_LENGTH;
  
      time = `${hours}ч ${minutes}м`
    }
  
    return time;
  }

  const cardButtonClassName = () => {
    let className = 'moviesCard__button';

    if (path === '/saved-movies') {
      className += ' moviesCard__delete';
    } else {
      className += ' moviesCard__save';

      if (isLikeActive === true) {
        className += ' moviesCard__save_true';
      }
    }
    
    return className;
  }

  function movieButtonToggle(e) {
    e.preventDefault();
    
    const movieInfo = {
      country: `${movie.country === null ? 'нет данных' : movie.country}`,
      director: `${movie.director === null ? 'нет данных' : movie.director}`,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movieImg,
      trailer: movie.trailerLink,
      thumbnail: movieImg,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: `${movie.nameEN === null ? 'нет данных' : movie.nameEN}`,
    }

    let deleteMovieId = '';

    if (path === '/saved-movies') {
      deleteMovieId = movie._id;
    } else {
      favoriteMovies.forEach((item) => {
  
        if (item.movieId === movie.id) {
  
          deleteMovieId = item._id;
        }
        return deleteMovieId;
      })
    }

    if (isLikeActive === true) {
      deleteMovie(deleteMovieId);
    } else {
      addMovieToFavorite(movieInfo)
    } 

  }

  function trailerLink() {
    if (path === '/movies') {
      return movie.trailerLink
    } else {
      return movie.trailer
    }

  }

  return (
    <li className="moviesCard">

      <div className="moviesCard__header">

        <div className="moviesCard__infoWrapper">
          <h2 className="moviesCard__title">{movie.nameRU}</h2>
          <p className="moviesCard__duration">{movieDuration()}</p>
        </div>

        <button type="button" className={cardButtonClassName()} onClick={movieButtonToggle}></button>

      </div>

      <a href={trailerLink()} target="_blank" rel="noreferrer" className="moviesCard__imgBox">
        <img className="moviesCard__img" src={movieImg} alt={movie.nameRU} />
      </a>

    </li>
  )
}
