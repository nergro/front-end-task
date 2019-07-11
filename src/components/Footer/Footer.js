import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-nav'>
        <ul className='footer-nav__items'>
          <li className='footer-nav__item'>
            <a href='##'>HOME</a>
          </li>
          <li className='footer-nav__item'>
            <a href='##'>SERVICE</a>
          </li>
          <li className='footer-nav__item'>
            <a href='##'>WORKS</a>
          </li>
          <li className='footer-nav__item'>
            <a href='##'>ABOUT ME</a>
          </li>
          <li className='footer-nav__item'>
            <a href='##'>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className='footer-description'>
        <p>
          Id porta nibh venenatis cras sed felis eget velit aliquet. Sagittis
          purus sit amet volutpat. Dui accumsan sit amet nulla. Risus feugiat in
          ante metus dictum. Ullamcorper velit sed ullamcorper morbi tincidunt
          ornare massa eget egestas.Mi eget mauris pharetra et ultrices neque.
          Suspendisse faucibus interdum posuere lorem.
        </p>
      </div>
      <div className='footer-copyright'>
        &copy;&nbsp;
        <a href='##'>
          <span className='highlighted'>DEMO</span>
          <span className='regular'>SITE</span>
        </a>
        &nbsp;&nbsp;All right reserved
      </div>
    </footer>
  );
};

export default footer;
