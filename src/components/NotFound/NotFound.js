import React from 'react';
import { useHistory } from 'react-router-dom';

import './NotFound.css';

export default function NotFound() {
  let history = useHistory();

  function GoBack () {
    history.goBack();
  }

  return (
    <section className="notFound">

      <span className="notFound__number">404</span>
      <h1 className="notFound__title">Страница не найдена</h1>

      <button className="notFound__returnButton" onClick={GoBack}>Назад</button>
      
    </section>
  )
}
