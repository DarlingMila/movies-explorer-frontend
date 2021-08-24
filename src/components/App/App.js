import './App.css';
import { Route, Switch } from 'react-router-dom';


import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import Preloader from '../Preloader/Preloader';

function App() {
  
  return (
   <div className="page">

    <Header />

    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route path="/signup">
        <Register />
      </Route>

      <Route path="/signin">
        <Login />
      </Route> 

      <Route path="/profile">
        <Profile />
      </Route> 

      <Route path="/movies">
        <Movies />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>

    </Switch>

    <Footer />

   </div>
  );
}

export default App;
