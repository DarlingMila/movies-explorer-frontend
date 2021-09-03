import React from 'react';

import './Popup.css';

export default function Popup({popup, popupMessage, hidePopup, isSuccessful}) {

  const popupClassName = 
  `popup ${popup && 'popup_show'}`

  const lockScreenToggle = () => {
    if (popup) {
      document.body.classList.add('_lock');
    } else {
      document.body.classList.remove('_lock');
    }
  }

  lockScreenToggle();

  const title = `${isSuccessful ? 'Успешно!' : 'Ошибка'}`

  return (
    <section className={popupClassName}>
      <div className="popup__container">
        <h1 className="popup__headline">{title}</h1>
        <span className="popup__text">{popupMessage}</span>
        <button type="button" className="popup__button" onClick={hidePopup}>Понятно</button>
      </div>
      
    </section>
  )
}
