import React from 'react';

import './Portfolio.css';


export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content">

        <h2 className="portfolio__headline">Портфолио</h2>

        <ul className="portfolio__links">

          <li className="portfolio__item" tabIndex="0">
            <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/DarlingMila/how-to-learn" tabIndex="-1">
              <p className="portfolio__linkName">Статичный сайт</p>
              <span className="portfolio__arrow">&#8599;</span>
            </a>
          </li>

          <li className="portfolio__item" tabIndex="0">
            <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/DarlingMila/russian-travel" tabIndex="-1">
              <p className="portfolio__linkName">Адаптивный сайт</p>
              <span className="portfolio__arrow">&#8599;</span>
            </a>
          </li>

          <li className="portfolio__item" tabIndex="0">
            <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/DarlingMila/react-mesto-api-full" tabIndex="-1">
              <p className="portfolio__linkName">Одностраничное приложение</p>
              <span className="portfolio__arrow">&#8599;</span>
            </a>
          </li>

        </ul>
      
      </div>
    </section>
  )
}
