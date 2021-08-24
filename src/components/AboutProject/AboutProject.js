import React from 'react';

import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <div className="aboutProject__content">
        <h2 className="aboutProject__headline">О проекте</h2>

        <div className="aboutProject__infoWrapper">
          <div className="aboutProject__infoColumn">
            <h3 className="aboutProject__infoHeadline">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject__infoText">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>

          <div className="aboutProject__infoColumn">
            <h3 className="aboutProject__infoHeadline">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject__infoText">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>

        </div>

        <div className="progressBar">

          <div className="progressBar__backend">

           <span className="progressBar__duration progressBar__duration_backend">
            1 неделя
            </span>
            <span className="progressBar__title">
            Back-end
            </span>

          </div>

          <div className="progressBar__frontend">

           <span className="progressBar__duration progressBar__duration_frontend">
            4 недели
            </span>
            <span className="progressBar__title">
            Front-end
            </span>

          </div>

        </div>


      </div>
    </section>
  )
}
