import React from 'react';
import './Header.css';

const header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <nav className='header-top-nav'>
          <ul className='header-top-nav__items'>
            <li className='header-top-nav__item'>
              <a href='##'>MENU</a>
            </li>
            <li className='header-top-nav__item'>
              <a href='##'>SOME TEXT</a>
            </li>
            <li className='header-top-nav__item'>
              <a href='##'>ANOTHER ITEM</a>
            </li>
            <li className='header-top-nav__item'>
              <a href='##'>ONE MORE</a>
            </li>
            <li className='header-top-nav__item'>
              <a href='##'>AND LAST ONE</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='header-bottom'>
        <div className='header-bottom-wrapper'>
          <div className='header-bottom-brand'>
            <a href='##'>
              <span className='highlighted'>DEMO</span>
              <span className='regular'>SITE</span>
            </a>
          </div>
          <nav className='header-bottom-nav'>
            <ul className='header-bottom-nav__items'>
              <li className='header-bottom-nav__item'>
                <a href='##'>HOME</a>
              </li>
              <li className='header-bottom-nav__item'>
                <a href='##'>SERVICE</a>
              </li>
              <li className='header-bottom-nav__item header-dropdown'>
                <a href='##'>WORKS</a>
                <div className='header-dropdown-content'>
                  <div className='arrow-up' />
                  <ul className='header-dropdown__list'>
                    <li className='header-dropdown-list__item'>
                      <a href='##'>ALL</a>
                    </li>
                    <li className='header-dropdown-list__item'>
                      <a href='##'>GRAPHIC</a>
                    </li>
                    <li className='header-dropdown-list__item'>
                      <a href='##'>DESIGN</a>
                    </li>
                    <li className='header-dropdown-list__item'>
                      <a href='##'>LOGO</a>
                    </li>
                    <li className='header-dropdown-list__item'>
                      <a href='##'>WEBSITE</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='header-bottom-nav__item'>
                <a href='##'>ABOUT ME</a>
              </li>
              <li className='header-bottom-nav__item'>
                <a href='##'>CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default header;
