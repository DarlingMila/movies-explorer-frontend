import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Register.css';

export default function Register({ onRegister, registerValidation, nameValidation, emailValidation, passwordValidation, valid, nameError, emailError, passwordError, isDisabled }) {

  const classNameBtn = `registerForm__submitButton ${valid && 'registerForm__submitButton_active'}`

  function onChangeName(e) {
    const text = e.target.value;
    nameValidation(text);
  }

  function onChangeEmail(e) {
    const text = e.target.value;
    emailValidation(text);
  }

  function onChangePassword(e) {
    const text = e.target.value;
    passwordValidation(text);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister();
  }

  return (
    <section className="register">

      <Link to={`/`} className="register__logo"></Link>
      <h1 className="register__greetings">Добро пожаловать!</h1>

      <form className="registerForm" id="registerForm" onChange={registerValidation}>
        <div className="registerForm__inputs">

          <label className="registerForm__inputArea">
            <span className="registerForm__inputTitle">Имя</span>

            <input 
            onChange={onChangeName} 
            type="text" 
            className="registerForm__input"
            disabled={isDisabled}
            >
            </input>

            <span className="registerForm__inputError">{nameError}</span>
          </label>

          <label className="registerForm__inputArea">
            <span className="registerForm__inputTitle">E-mail</span>

            <input 
            onChange={onChangeEmail} 
            type="text" 
            className="registerForm__input"
            disabled={isDisabled}
            >
            </input>

            <span className="registerForm__inputError">{emailError}</span>
          </label>

          <label className="registerForm__inputArea">
            <span className="registerForm__inputTitle">Пароль</span>

            <input 
            onChange={onChangePassword} 
            type="password" 
            className="registerForm__input"
            disabled={isDisabled}
            >
            </input>

            <span className="registerForm__inputError">{passwordError}</span>
          </label>

        </div>

        <div className="registerForm__buttons">

          <button 
          type="submit" 
          onClick={handleSubmit}
          className={classNameBtn}
          disabled={!valid || isDisabled}
          >
            Зарегистрироваться
          </button>

          <div className="registerForm__signinWrapper"> 
            <span className="registerForm__signinText">Уже зарегистрированы?</span>
            <NavLink to={`/signin`} type="button" className="registerForm__signinButton">Войти</NavLink>
          </div>
        </div> 

      </form>
      
    </section>
  )
}
