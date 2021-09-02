import React from 'react';

import './Preloader.css';

const Preloader = ({ show }) => {

    function className () {
        let className = 'preloader';
        if (show === true) {
            className += ' preloader_show'
        }
        return className;
    }

    return (
        <div className={className()}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
