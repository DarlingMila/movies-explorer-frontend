import React from 'react';
import { useState } from 'react';

import './SearchForm.css';

export default function SearchForm({ search, showShortMovies }) {
  
  const [ isShort, setIsShort ] = useState(true);

  function isShortToggle() {
    if (isShort === true) {
      setIsShort(false);
    } else {
      setIsShort(true);
    }

    showShortMovies(isShort);
  }

  function newQuery(e) {
    e.preventDefault();
    const query = document.querySelector('.searchForm__input');
    search(query.value);
    setTimeout(function () {query.value = ''}, 500)
  }

  return (
    <section className="searchForm">


      <form className="searchForm__form">
        <div className="searchForm__searchWrapper">
          <input type="text" name="search" placeholder="Фильм" className="searchForm__input"></input>
          <button type="submit" className="searchForm__searchButton" onClick={newQuery}></button>
        </div>
        
        <label className="searchForm__checkbox">
          <input type="checkbox" name="shortfilm" className="searchForm__realCheckbox" onChange={isShortToggle}></input>
          <span className="searchForm__customCheckbox"></span>
          <span className="searchForm__checkboxTitle">Короткометражки</span>
        </label>
      </form>

      
    </section>
  )
}
