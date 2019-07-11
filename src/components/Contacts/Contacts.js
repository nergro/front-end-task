import React from 'react';
import './Contacts.css';

const contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts-head'>
        <h1>CONTACT</h1>
        <hr />
      </div>
      <div className='contacts-content'>
        <div className='contacts-content-left'>
          <p>
            Malesuada fames ac turpis egestas. Consequat ac felis donec et odio
            pellentesque diam volutpat. Commodo odio aenean sed adipiscing.
            Lobortis feugiat vivamus at augue eget. Mauris nunc congue nisi
            vitae.
          </p>
          <p>
            Nunc sed blandit libero volutpat sed. At risus viverra adipiscing at
            in tellus integer. Risus quis varius quam quisque. Tortor consequat
            id porta nibh venenatis cras sed felis eget.
          </p>
          <p>
            Dignissim diam quis enim lobortis scelerisque fermentum dui
            faucibus. Morbi tristique senectus et netus et malesuada. In hac
            habitasse platea dictumst quisque sagittis.
          </p>
        </div>
        <div className='contacts-content-right'>
          <form className='message-form'>
            <div className='form-control'>
              <label htmlFor='name'>NAME</label>
              <input type='text' name='name' autoComplete='off' />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>EMAIL</label>
              <input type='email' name='email' autoComplete='off' />
            </div>
            <div className='form-control'>
              <label htmlFor='message'>MESSAGE</label>
              <textarea name='message' rows='10' />
            </div>
            <button type='submit' className='form-button'>
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contacts;
