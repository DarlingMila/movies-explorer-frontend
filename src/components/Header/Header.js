import React from 'react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';

import './Header.css';

export default function Header({ loggedIn }) {

  const path = useLocation().pathname;
  const history = useHistory();

  if (history.action === "PUSH") {
    const iconMenu = document.querySelector('.header__menuIcon');

    if (iconMenu) {
      const menuBody = document.querySelector('.header__menuBody');

      document.body.classList.remove('_lock');
      iconMenu.classList.remove('header__menuIcon_active');
      menuBody.classList.remove('header__menuBody_active');
    }
  }

  function toggleMenuButton() {
    const iconMenu = document.querySelector('.header__menuIcon');
    const menuBody = document.querySelector('.header__menuBody');

    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('header__menuIcon_active');
    menuBody.classList.toggle('header__menuBody_active');
  }

  function sectionClassName() {
    let className = 'header';
    if (path === '/') {
      className += ` header_main`;
    }
    return className;
  }

  function navLinkClassName() {
    let className = 'header__navLink';
    if (path === '/') {
      className += ` header__navLink_main`;
    }
    return className;
  }

  function menuIconClassName() {
    let className = 'header__menuIcon';
    if (path === '/') {
      className += ` header__menuIcon_main`;
    }
    return className;
  }

  function registerBtnClassName() {
    let className = 'header__button header__registerButton'
    if (path === '/') {
      className += ` header__registerButton_main`;
    }
    return className;
  }


  function headerContent() {
    if (loggedIn) {
      return (
      <>
        <div className="header__filmButtonsWrapper">
          <NavLink to={`/movies`} className={navLinkClassName()} activeClassName="header__navLink_active">Фильмы</NavLink>
          <NavLink to={`/saved-movies`} className={navLinkClassName()} activeClassName="header__navLink_active">Сохранённые фильмы</NavLink>
        </div>

        <div className="header__profileWrapper">
          <NavLink to={`/profile`} className={navLinkClassName()}activeClassName="header__navLink_active">Аккаунт</NavLink>
          <div className="header__profileImg"></div>
        </div>

        <div className="header__menuWrapper">
          <button type="button" className={menuIconClassName()} onClick={toggleMenuButton}>
            <span></span>
          </button>
          <nav className="header__menuBody">
            <ul className="header__menuList">
              <li className="header__menuListItem">
                <NavLink to={`/`} exact className="header__menuLink" activeClassName="header__menuLink_active">Главная</NavLink>
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
      </>
      )
    } else {
      return (
        <div className="header__buttons">
          <Link to={`/signup`} className={registerBtnClassName()}>Регистрация</Link>
          <Link to={`/signin`} className="header__button header__loginButton">Войти</Link>
        </div>
      )
    }
  }

  if (path === '/signup' || path === '/signin') {
    return (
      <>
      </>
    )
  } else {
    return (
    <section className={sectionClassName()}>
      <div className="header__content">
        <Link to={`/`} className="header__logo"></Link>
        {headerContent()}
      </div>
    </section>
    )
  }

}
