import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';


export default function MoviesCard({card}) {

  const path = useLocation().pathname;
  const saved = card.saved;

  function cardButtonClassName() {
    let className = 'moviesCard__button';

    if (path === '/saved-movies') {
      className += ' moviesCard__delete';
    } else {
      className += ' moviesCard__save';
      if (saved) {
        className += ' moviesCard__save_true';
      }
    }
    
    return className;
  }

  return (
    <li className="moviesCard">

      <div className="moviesCard__header">

        <div className="moviesCard__infoWrapper">
          <h2 className="moviesCard__title">{card.name}</h2>
          <p className="moviesCard__duration">{card.duration}</p>
        </div>

        <button type="button" className={cardButtonClassName()}></button>

      </div>

      <img className="moviesCard__img" src={card.img} alt={card.name} />

    </li>
  )
}
