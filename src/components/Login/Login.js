import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

export default function Login() {
  return (
    <section className="login">

      <Link to={`/`} className="login__logo"></Link>
      <h1 className="login__greetings">Рады видеть!</h1>

      <form className="loginForm">
        <div className="loginForm__inputs">

          <label className="loginForm__inputArea">
            <span className="loginForm__inputTitle">E-mail</span>
            <input type="text" className="loginForm__input"></input>
          </label>

          <label className="loginForm__inputArea">
            <span className="loginForm__inputTitle">Пароль</span>
            <input type="password" className="loginForm__input"></input>
          </label>

        </div>

        <div className="loginForm__buttons">
          <button type="submit" className="loginForm__submitButton">Войти</button>
          <div className="loginForm__signupWrapper"> 
            <span className="loginForm__signupText">Ещё не зарегистрированы?</span>
            <button type="button" className="loginForm__signupButton">Регистрация</button>
          </div>
        </div>

      </form>
      
    </section>
  )
}
