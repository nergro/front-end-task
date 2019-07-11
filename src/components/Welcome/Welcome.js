import React from 'react';
import './Welcome.css';
import mainImg from '../../images/futurama.jpg';

const welcome = () => {
  return (
    <div className='welcome'>
      <aside className='welcome-aside'>
        <div className='welcome-aside__textbox'>
          <h1>WELCOME</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className='welcome-aside-button-wrapper'>
          <button className='welcome-aside-button'>LEARN MORE</button>
        </div>
      </aside>
      <div className='welcome-main'>
        <img src={mainImg} alt='UI/UX Design' />
        <div className='welcome-main__container'>
          <div className='welcome-main__container--textbox'>
            <h2>UI/UX DESIGN</h2>
            <p>
              Turpis cursus in hac habitasse platea dictumst quisque sagittis.
              In nisl nisi scelerisque eu ultrices vitae.
            </p>
            <p>
              Orci ac auctor augue mauris augue neque. Phasellus faucibus
              scelerisque eleifend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
