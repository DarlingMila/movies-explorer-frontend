import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

import movieImg from '../../images/movie-img.jpg';

const cards = [
  {
    img: movieImg,
    name: '33 слова о дизайне',
    duration: '1ч 47м',
    saved: true,
  },
  {
    img: movieImg,
    name: '33 слова о дизайне',
    duration: '1ч 47м',
    saved: false,
  },
  {
    img: movieImg,
    name: '33 слова о дизайне',
    duration: '1ч 47м',
    saved: false,
  },
  {
    img: movieImg,
    name: '33 слова о дизайне',
    duration: '1ч 47м',
    saved: true,
  },
]



export default function MoviesCardList() {
  return (
    <section className="moviesCardList">

      <ul className="moviesCardList__gallery">
        {cards.map((item) => (
          <MoviesCard
            key={item._id}
            id={item._id}
            card={item}
          />

          )
        ).reverse()}
      </ul>

      <button type='button' className="moviesCardList__moreButton">Ещё</button>

    </section>
  )
}
