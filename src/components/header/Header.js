import React, { useState } from 'react';
import './Header.scss';

import logo from '../../assets/cinema-logo.svg';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-film',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <div className="header-nav-wrapper">
      <div className="header-bar"></div>
      <div className="header-navbar">
        <div className="header-image">
          <img src={logo} alt=""/>
        </div>
        <div className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
             id="header-mobile-menu"
             onClick={() => toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
          {
            HEADER_LIST.map(data => {
              return (
                <li
                  key={data.id}
                  className="header-nav-item">
                  <span className="header-list-name">
                    <i className={data.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{data.name}</span>
                </li>
              );
            })
          }
          <li className="header-nav-item">Now Playing</li>
          <li className="header-nav-item">New Movies</li>
          <input className="search-input" type="text" placeholder="Search for a movie"/>
        </ul>
      </div>
    </div>
  );
};

export default Header;
