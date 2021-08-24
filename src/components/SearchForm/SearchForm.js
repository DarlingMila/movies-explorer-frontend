import React from 'react';

import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className="searchForm">


      <form className="searchForm__form">
        <div className="searchForm__searchWrapper">
          <input type="text" name="search" placeholder="Фильм" className="searchForm__input"></input>
          <button type="submit" className="searchForm__searchButton"></button>
        </div>
        
        <label className="searchForm__checkbox">
          <input type="checkbox" name="shortfilm" className="searchForm__realCheckbox"></input>
          <span className="searchForm__customCheckbox"></span>
          <span className="searchForm__checkboxTitle">Короткометражки</span>
        </label>
      </form>

      
    </section>
  )
}
