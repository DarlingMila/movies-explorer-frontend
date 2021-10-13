import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({ allMovies, favoriteMovies, newQuery, showShortMovies, short, moviesPerPage, addMoreButton, showPreloader, addMovieToFavorite, deleteMovie, movieArray }) {

  return (
    <div>

      <SearchForm 
      search={newQuery}
      showShortMovies={showShortMovies}
      />

      <MoviesCardList
      allMovies={allMovies}
      favoriteMovies={favoriteMovies}
      short={short}

      moviesPerPage={moviesPerPage}
      addMoreButton={addMoreButton}
      showPreloader={showPreloader}

      addMovieToFavorite={addMovieToFavorite}
      deleteMovie={deleteMovie}

      movieArray={movieArray}
      />

    </div>
  )
}
