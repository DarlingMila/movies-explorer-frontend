import React from 'react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';

import './Header.css';

export default function Header() {

  const path = useLocation().pathname;
  const history = useHistory();

  if (history.action === "PUSH") {
    const iconMenu = document.querySelector('.header__menuIcon');
    const menuBody = document.querySelector('.header__menuBody');

    document.body.classList.remove('_lock');
    iconMenu.classList.remove('header__menuIcon_active');
    menuBody.classList.remove('header__menuBody_active');
  }

  function toggleMenuButton() {
    const iconMenu = document.querySelector('.header__menuIcon');
    const menuBody = document.querySelector('.header__menuBody');

    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('header__menuIcon_active');
    menuBody.classList.toggle('header__menuBody_active');
  }

  if (path === '/') {
    return (
      <section className="header header_main">
        <div className="header__content">
          <Link to={`/`} className="header__logo"></Link>
          <div className="header__buttons">
            <Link to={`/signup`} className="header__button header__registerButton">Регистрация</Link>
            <Link to={`/signin`} className="header__button header__loginButton">Войти</Link>
          </div>
        </div>
      </section>
    )
  } else if (path === '/movies' || path === '/saved-movies' || path === '/profile') {
    return (
      <section className="header">
        <div className="header__content">

          <Link to={`/`} className="header__logo"></Link>
          
          <div className="header__filmButtonsWrapper">
            <NavLink to={`/movies`} className="header__navLink" activeClassName="header__navLink_active">Фильмы</NavLink>
            <NavLink to={`/saved-movies`} className="header__navLink" activeClassName="header__navLink_active">Сохранённые фильмы</NavLink>
          </div>

          <div className="header__profileWrapper">
            <NavLink to={`/profile`} className="header__navLink" activeClassName="header__navLink_active">Аккаунт</NavLink>
            <div className="header__profileImg"></div>
          </div>

          <div className="header__menuWrapper">
            <button type="button" className="header__menuIcon" onClick={toggleMenuButton}>
              <span></span>
            </button>
            <nav className="header__menuBody">
              <ul className="header__menuList">
                <li className="header__menuListItem">
                  <NavLink to={`/`} className="header__menuLink" >Главная</NavLink>
                </li>
                <li className="header__menuListItem">
                  <NavLink to={`/movies`} className="header__menuLink" activeClassName="header__menuLink_active">Фильмы</NavLink>
                </li>
                <li className="header__menuListItem">
                  <NavLink to={`/saved-movies`} className="header__menuLink" activeClassName="header__menuLink_active">Сохранённе фильмы</NavLink>
                </li>
                <li className="header__menuListItem">
                  <NavLink to={`/profile`} className="header__menuLink header__menuLink_profile" activeClassName="header__menuLink_active">Аккаунт</NavLink>
                  <div className="header__profileImg header__profileImg_menu"></div>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </section>
    )
  } else {
    return (
      <>
      </>
    )
  }

}
