import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

export default function Register() {
  return (
    <section className="register">

      <Link to={`/`} className="register__logo"></Link>
      <h1 className="register__greetings">Добро пожаловать!</h1>

      <form className="registerForm">
        <div className="registerForm__inputs">

          <label className="registerForm__inputArea">
            <span className="registerForm__inputTitle">Имя</span>
            <input type="text" className="registerForm__input"></input>
            <span className="registerForm__inputError registerForm__inputError_hide">Что-то пошло не так...</span>
          </label>

          <label className="registerForm__inputArea">
            <span className="registerForm__inputTitle">E-mail</span>
            <input type="text" className="registerForm__input"></input>
            <span className="registerForm__inputError registerForm__inputError_hide">Что-то пошло не так...</span>
          </label>

          <label className="registerForm__inputArea">
            <span className="registerForm__inputTitle">Пароль</span>
            <input type="password" className="registerForm__input"></input>
            <span className="registerForm__inputError">Что-то пошло не так...</span>
          </label>

        </div>

        <div className="registerForm__buttons">
          <button type="submit" className="registerForm__submitButton">Зарегистрироваться</button>
          <div className="registerForm__signinWrapper"> 
            <span className="registerForm__signinText">Уже зарегистрированы?</span>
            <button type="button" className="registerForm__signinButton">Войти</button>
          </div>
        </div> 

      </form>
      
    </section>
  )
}
