import React, { useContext } from 'react';

import './Profile.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function Profile({onLogout, onUpdate, profileValidation, nameValidation, emailValidation, valid}) {

  const currentUser = useContext(CurrentUserContext);
  const classNameBtn = `profile__button ${valid && 'profile__button_active'} profile__button_edit`;

  function onChangeName(e) {
    const text = e.target.value;
    nameValidation(text);
  }

  function onChangeEmail(e) {
    const text = e.target.value;
    emailValidation(text);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate();
    document.getElementById('profile__form').reset();
  }

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  return (
    <section className="profile">

      <h1 className="profile__greetings">Привет, {currentUser.name}!</h1>

      <form className="profile__form" id="profile__form" onChange={profileValidation}>

        <div className="profile__inputs">
          <label className="profile__inputArea">
            <span className="profile__inputTitle">Имя</span>

            <input 
            onChange={onChangeName} 
            type="text" 
            className="profile__input" 
            placeholder={currentUser.name}
            >
            </input>

          </label>

          <label className="profile__inputArea">
            <span className="profile__inputTitle">E-mail</span>

            <input 
            onChange={onChangeEmail} 
            type="text" 
            className="profile__input" 
            placeholder={currentUser.email}
            >
            </input>

          </label>

        </div>

        <div className="profile__buttons">

          <button 
          type="submit" 
          onClick={handleSubmit}
          className={classNameBtn}
          disabled={!valid}
          >
            Редактировать
          </button>

          <button 
          type="button" 
          onClick={handleLogout}
          className="profile__button profile__button_signout"
          >
            Выйти из аккаунта
          </button>
        </div>

      </form>
      
    </section>
  )
}
