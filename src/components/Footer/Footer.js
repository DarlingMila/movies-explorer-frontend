import React from 'react';
import { useLocation } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  const path = useLocation().pathname;

  if (path === '/' || path === '/movies' || path === '/saved-movies') {
    return (
      <section className="footer">
  
        <div className="footer__content">
  
          <p className="footer__credits">Учебный проект Яндекс.Практикум х BeatFilm.</p>
  
          <div className="footer__wrapper">
            <p className="footer__copy">&#169; 2021</p>
  
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="https://github.com/" rel="noreferrer" target="_blank">Github</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="https://www.facebook.com/" rel="noreferrer" target="_blank">Facebook</a>
              </li>
            </ul>
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
