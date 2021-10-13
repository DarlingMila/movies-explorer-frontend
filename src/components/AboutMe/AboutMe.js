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

            <p className="aboutMe__about">Раньше занималась обновлением информации на сайте, теперь хочу попробовать себя непосредственно в веб-разработке. Обучение начала с просмотров уроков на ютубе и чтения документаций, а затем решила пройти курс в Яндекс.Практикум. Веб-разработка привлекается меня своей схожестью с конструктором и поиском интересных решений. Мне нравится наблюдать как строки кода превращаются в меню сайта или интерактивную кнопку.</p>

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
