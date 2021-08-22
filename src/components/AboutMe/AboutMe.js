import React from 'react';

import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__content">

        <h2 className="aboutMe__headline">Студент</h2>

        <div className="aboutMe__infoWrapper">

          <div className="aboutMe__studentInfo">

            <span className="aboutMe__name">Людмила</span>
            <span className="aboutMe__info">Фронтенд-разработчик, 25 лет</span>

            <p className="aboutMe__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <ul className="aboutMe__links">
              <li className="aboutMe__item">
                <a className="aboutMe__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/darlingwhiteowl/">Facebook</a>
              </li>
              <li className="aboutMe__item">
                <a className="aboutMe__link" target="_blank" rel="noreferrer" href="https://github.com/DarlingMila">Github</a>
              </li>
            </ul>

          </div>

          <div className="aboutMe__img"></div>

        </div>

      </div>
      
    </section>
  )
}
