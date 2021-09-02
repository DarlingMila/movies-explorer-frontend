import './App.css';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

import api from '../../utils/MoviesApi';
import auth from '../../utils/MainApi';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

import NotFound from '../NotFound/NotFound';
import Popup from '../Popup/Popup';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {

  const history = useHistory();
  const pathName = useLocation().pathname;

  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [valid, setValid] = useState(false);

  function clearStates() {
    setName('');
    setNameError('');
    setEmail('');
    setEmailError('');
    setPassword('');
    setPasswordError('');
    setValid(false);
  }

  useEffect(() => {
    clearStates();
  }, [pathName]);

  const NAME_REGEX = /^[a-zA-Zа-яёА-ЯЁ -]+$/u;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function nameValidation(text) {
    if (!text) {
      setNameError('Поле не должно быть пустым')
    } else if (!(NAME_REGEX.test(text))) {
      setNameError('Поле содержит недопустимые символы')
    } else {
      setNameError('')
    }
    setName(text)
  }

  function emailValidation(text) {
    if (!text) {
      setEmailError('Поле не должно быть пустым')
    } else if (!(EMAIL_REGEX.test(text))) {
      setEmailError('Поле заполнено некорректно')
    } else {
      setEmailError('')
    }
    setEmail(text);
  }

  function passwordValidation(text) {
    if (!text) {
      setPasswordError('Поле не должно быть пустым')
    } else if (text.length < 6) {
      setPasswordError('Пароль должен содержать не менее 6 символов')
    } else {
      setPasswordError('')
    }
    setPassword(text);
  }

  const registerValidation = useCallback(() => {
      if (name && email && password && !nameError && !emailError && !passwordError) {
        setValid(true)
      } else {
        setValid(false)
      }
  }, [name, email, password])

  const loginValidation = useCallback(() => {
    if (email && password && !emailError && !passwordError) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [email, password])

  const profileValidation = useCallback(() => {
    if (((name && !nameError) || (name === '')) 
    && ((email && !emailError) || (email === ''))) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [name, email])

  const handleRegister = () => {
    return auth.register(email, password, name)
    .then((res) => {
      return res;
    })
    .then(() => {
      handleLogin();
    })
    .catch(() => {
      clearStates();
      showPopup('Ошибка регистрации. Попробуйте снова.');
    })
  }

  const handleLogin = () => {
    return auth.login(email, password)
    .then((res) => {
      localStorage.setItem('jwt', res.token);
      setLoggedIn(true);
      history.push('/movies');
    })
    .catch((err) => {
      clearStates();
      console.log(err)
      showPopup('Ошибка авторизации. Попробуйте снова.');
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');

    setLoggedIn(false);
    history.push('/');
  }

  const changeUserInfo = () => {
    const jwt = localStorage.getItem('jwt');

    const newName = () => {
      if (name === '') {
        return currentUser.name
      } else {
        return name;
      }
    };

    const newEmail = () => {
      if (email === '') {
        return currentUser.email
      } else {
        return email;
      }
    };

    return auth.changeUserInfo(newEmail(), newName(), jwt)
    .then((res) => {
      setCurrentUser(res)
    })
    .catch(() => {
      showPopup('Ошибка при обновлении данных. Попробуйте снова.');
    })
  }

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      auth.getUserInfo(jwt)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);

        history.push('/movies');
      })
      .catch(() => {
        history.push('/signin')
      })
    }
  }, [history, loggedIn])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])


  const [allMovies, setAllMovies] = useState([]);
  const [allFavoriteMovies, setAllFavoriteMovies] = useState([]);

  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedFavoriteMovies, setSelectedFavoriteMovies] = useState([]);

  const [moviesPerPage, setMoviesPerPage] = useState(0);

  const [query, setQuery] = useState('');
  const [short, setShort] = useState(false);

  const [screenWidth, setScreenWidth] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  function newQuery(query) {
    if (query === '') {
      showPopup('Введите ключевое слово.');
    } else {
      setQuery(query);
    }
  }

  function showShortMovies(boolean) {
    setShort(boolean);
  }

  function windowWidth() {
    const windowScreenWidth = window.screen.width;
    function waiting() {
      setScreenWidth(windowScreenWidth)
    }
    setTimeout(waiting, 4000);
  }
  
  function quantityBasedOnWidth () {
    if (screenWidth >= 1280) {
      setMoviesPerPage(12);
    } else if (screenWidth < 1280 && screenWidth >= 768) {
      setMoviesPerPage(8);
    } else {
      setMoviesPerPage(5);
    }
  }

  function addMoreButton() {
    if (screenWidth >= 1280) {
      setMoviesPerPage(moviesPerPage + 3);
    } else {
      setMoviesPerPage(moviesPerPage + 2);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', windowWidth);
    windowWidth();
  }, []);

  useEffect(() => {
    quantityBasedOnWidth ()
  }, [screenWidth])

  useEffect(() => {
    setShowPreloader(true);

    const jwt = localStorage.getItem('jwt'); 

    if (jwt) {
      api.getMyMovies(jwt)
      .then((res) => {
        setAllFavoriteMovies(res);
      })
      .then(() => {
        const requestedMovies = allFavoriteMovies
        .filter((movie) => movie.nameRU.includes(query));

        setSelectedFavoriteMovies(requestedMovies);
        quantityBasedOnWidth();
      })
      .catch(() => {
        showPopup('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
      })
      .finally(() => {
        setShowPreloader(false);
      })
    }

    api.getAllMovies()
    .then((res) => {
      setAllMovies(res);
    })
    .then(() => {
      const requestedMovies = allMovies
      .filter((movie) => movie.nameRU.includes(query));
  
      setSelectedMovies(requestedMovies);
      quantityBasedOnWidth();
    })
    .catch(() => {
      showPopup('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
    })
    .finally(() => {
      setShowPreloader(false);
    });

  }, [query]);

  const addMovieToFavorite = (movie) => {
    const jwt = localStorage.getItem('jwt');

    api.addMovie(movie, jwt)
    .then((newMovie) => {
      const newArray = selectedFavoriteMovies.concat(newMovie);
      setSelectedFavoriteMovies(newArray)
    })
    .catch(() => {
      showPopup('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
    })
  }

  const deleteMovie = (movieId) => {
    const jwt = localStorage.getItem('jwt');

    api.deleteMovie(movieId, jwt)
    .then(() => {
      const newArray = selectedFavoriteMovies.filter((item) => item._id !== movieId);
      setSelectedFavoriteMovies(newArray);
    })
    .catch(() => {
      showPopup('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
    })
  }


  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] =useState('');

  function showPopup(message) {
    setPopupMessage(message);
    setPopup(true);
  }

  function hidePopup() {
    setPopup(false);
    setPopupMessage('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

      <Header 
      loggedIn={loggedIn}
      />

      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>

        <Route path="/signup">
          <Register 
          onRegister={handleRegister}
          registerValidation={registerValidation}

          nameValidation={nameValidation}
          emailValidation={emailValidation}
          passwordValidation={passwordValidation}

          nameError={nameError}
          emailError={emailError}
          passwordError={passwordError}

          valid={valid}
          />
        </Route>

        <Route path="/signin">
          <Login 
          onLogin={handleLogin}
          loginValidation={loginValidation}
          
          emailValidation={emailValidation}
          passwordValidation={passwordValidation}

          valid={valid}
          />
        </Route> 
 
        <ProtectedRoute 
          path="/profile"
          component={Profile}
          loggedIn={loggedIn}

          onLogout={handleLogout}
          onUpdate={changeUserInfo}
          profileValidation={profileValidation}

          nameValidation={nameValidation}
          emailValidation={emailValidation}

          valid={valid}
        />

        <ProtectedRoute 
          path="/movies"
          component={Movies}
          loggedIn={loggedIn}

          allMovies={selectedMovies}
          favoriteMovies={selectedFavoriteMovies}
          newQuery={newQuery}
          short={short}
          showShortMovies={showShortMovies}

          moviesPerPage={moviesPerPage}
          addMoreButton={addMoreButton}
          showPreloader={showPreloader}

          addMovieToFavorite={addMovieToFavorite}
          deleteMovie={deleteMovie}

          movieArray={selectedMovies}

        />

        <ProtectedRoute 
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}

          allMovies={selectedMovies}
          favoriteMovies={selectedFavoriteMovies}
          newQuery={newQuery}
          short={short}
          showShortMovies={showShortMovies}

          moviesPerPage={moviesPerPage}
          addMoreButton={addMoreButton}
          showPreloader={showPreloader}

          addMovieToFavorite={addMovieToFavorite}
          deleteMovie={deleteMovie}

          movieArray={selectedFavoriteMovies}
        />

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

      <Footer />

      <Popup 
        popup={popup}
        hidePopup={hidePopup}
        popupMessage={popupMessage}
      />

      </div>

    </CurrentUserContext.Provider>
   
  );
}

export default App;
