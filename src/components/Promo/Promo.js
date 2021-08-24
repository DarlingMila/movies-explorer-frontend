import React from 'react';

import './Promo.css';

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__wrapper">
          <h1 className="promo__headline">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <span className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
        </div>
        <div className="promo__img"></div>
      </div>
    </section>
  )
}
