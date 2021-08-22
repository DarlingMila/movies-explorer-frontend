// import userEvent from '@testing-library/user-event';
import React from 'react';

import './Profile.css';


function checkForm (e) {
  e.preventDefault();
  const form = document.querySelector('.profile__form');

  console.log(form.elements[0].value);
  console.log(form.elements[1].value);
}

const user = {
  name: 'Виталька',
  email: 'почта@почта.крю'
}

export default function Profile() {
  return (
    <section className="profile">

      <h1 className="profile__greetings">Привет, {user.name}!</h1>

      <form className="profile__form">

        <div className="profile__inputs">
          <label className="profile__inputArea">
            <span className="profile__inputTitle">Имя</span>
            <input type="text" className="profile__input" placeholder={user.name}></input>
          </label>

          <label className="profile__inputArea">
            <span className="profile__inputTitle">E-mail</span>
            <input type="text" className="profile__input" placeholder={user.email}></input>
          </label>

        </div>

        <div className="profile__buttons">
          <button type="submit" className="profile__button profile__button_edit" onClick={checkForm}>Редактировать</button>
          <button type="button" className="profile__button profile__button_signout">Выйти из аккаунта</button>
        </div>

      </form>
      
    </section>
  )
}
