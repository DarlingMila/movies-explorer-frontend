import React from 'react';

import './Popup.css';

export default function Popup({popup, popupMessage, hidePopup}) {

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

  return (
    <section className={popupClassName}>
      <div className="popup__container">
        <h1 className="popup__headline">Ошибка</h1>
        <span className="popup__text">{popupMessage}</span>
        <button type="button" className="popup__button" onClick={hidePopup}>Понятно</button>
      </div>
      
    </section>
  )
}
