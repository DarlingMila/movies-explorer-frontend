import React from 'react';
import { Link, NavLink  } from 'react-router-dom';

import './Login.css';

export default function Login({ onLogin, loginValidation, emailValidation, passwordValidation, valid, isDisabled}) {

  const classNameBtn = `loginForm__submitButton ${valid && 'loginForm__submitButton_active'}`
  
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
    onLogin();
  }
  
  return (
    <section className="login">

      <Link to={`/`} className="login__logo"></Link>
      <h1 className="login__greetings">Рады видеть!</h1>

      <form className="loginForm" id="loginForm" onChange={loginValidation}>
        <div className="loginForm__inputs">

          <label className="loginForm__inputArea">
            <span className="loginForm__inputTitle">E-mail</span>

            <input
            onChange={onChangeEmail}  
            type="text" 
            className="loginForm__input"
            disabled={isDisabled}
            >
            </input>

          </label>

          <label className="loginForm__inputArea">
            <span className="loginForm__inputTitle">Пароль</span>

            <input 
            onChange={onChangePassword} 
            type="password" 
            className="loginForm__input"
            disabled={isDisabled}
            >
            </input>

          </label>

        </div>

        <div className="loginForm__buttons">

          <button 
          type="submit"
          onClick={handleSubmit}
          className={classNameBtn}
          disabled={!valid || isDisabled}
          >
            Войти
          </button>

          <div className="loginForm__signupWrapper"> 
            <span className="loginForm__signupText">Ещё не зарегистрированы?</span>
            <NavLink to={`/signup`} type="button" className="loginForm__signupButton">Регистрация</NavLink>
          </div>
        </div>

      </form>
      
    </section>
  )
}
