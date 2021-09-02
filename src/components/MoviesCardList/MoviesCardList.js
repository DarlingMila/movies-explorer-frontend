import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader  from '../Preloader/Preloader';


export default function MoviesCardList({ allMovies, favoriteMovies, short, moviesPerPage, addMoreButton, showPreloader, addMovieToFavorite, deleteMovie }) {

  const path = useLocation().pathname;
  
  let movies = [];

  function movieArray () {
    movies = allMovies;
    if (path === '/movies') {
      movies = allMovies;
    } else {
      movies = favoriteMovies;
    }
    return movies;
  }

  function shortMoviesToggle(duration) {
    if (short === false ) return true;
    if (short === true && duration < 40) {
      return true
    };
    return false;
  } 

  function galleryClassName () {
    let className = 'moviesCardList__gallery';
    if (showPreloader === true) {
      className += ' moviesCardList__gallery_hide'
    }
    return className;
  }

  function buttonClassName() {
    let className = 'moviesCardList__moreButton';
    const shownMovies = movieArray()
    .filter((movie) => shortMoviesToggle(movie.duration)).length

    if (moviesPerPage >= shownMovies) {
      className += ` moviesCardList__moreButton_hidden`;
    }
    return className;
  }

  function createMovieCard (movie) {  
    return (<MoviesCard
      key={movie.id}
      id={movie.id}
      movie={movie}

      addMovieToFavorite={addMovieToFavorite}
      deleteMovie={deleteMovie}

      favoriteMovies={favoriteMovies}
      
    />)
  }


  return (
    <section className="moviesCardList">

      <Preloader show={showPreloader}/>

      <ul className={galleryClassName()}>
        
        {
         movieArray()
         .filter((movie) => shortMoviesToggle(movie.duration))
         .slice(0, moviesPerPage)
         .map((movie) => (createMovieCard(movie)))
        }

      </ul>

      <button 
      type='button' 
      className={buttonClassName()} 
      onClick={addMoreButton}
      >
        Ещё
      </button>

    </section>
  );
}
