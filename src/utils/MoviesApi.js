class MoviesApi {
  constructor ({ beatfilmMoviesUrl, moviesExplorerUrl} ) {
    this.BM_url = beatfilmMoviesUrl;
    this.ME_url = moviesExplorerUrl;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  getAllMovies () {
    return fetch(`${this.BM_url}`)
    .then(res => {
      return this._getResponseData(res);
    })
  }

  getMyMovies(token) {
    return fetch(`${this.ME_url}/movies`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  addMovie (movie, token) {
    return fetch(`${this.ME_url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  deleteMovie(movieId, token) {
    return fetch (`${this.ME_url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }
}

// const config = {
//   beatfilmMoviesUrl: 'https://api.nomoreparties.co/beatfilm-movies',
//   moviesExplorerUrl: 'http://localhost:3001',
// }

const config = {
  beatfilmMoviesUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  moviesExplorerUrl: 'http://api.movies-world.nomoredomains.monster',
}

const api = new MoviesApi (config);

export default api;
