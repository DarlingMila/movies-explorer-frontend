import React from 'react';

import './Techs.css';

export default function Techs() {
  return (
    <section className="techs">

      <div className="techs__content">

        <h2 className="techs__headline">Технологии</h2>

        <span className="techs__title">7 технологий</span>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <ul className="techs__list">
          <li className="techs__cell">
            <h3 className="techs__item">
            HTML
            </h3>
          </li>
          <li className="techs__cell">
            <h3 className="techs__item">
              CSS
            </h3>
          </li>
          <li className="techs__cell">
            <h3 className="techs__item">
              JS
            </h3>
          </li>
          <li className="techs__cell">
            <h3 className="techs__item">
              React
            </h3>
          </li>
          <li className="techs__cell">
            <h3 className="techs__item">
              Git
            </h3>
          </li>
          <li className="techs__cell">
            <h3 className="techs__item">
              Express.js
            </h3>
          </li>
          <li className="techs__cell">
            <h3 className="techs__item">
              mongoDB
            </h3>
          </li>
        </ul>

      </div>
      
    </section>
  )
}
