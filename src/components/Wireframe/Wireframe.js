import React from 'react';
import './Wireframe.css';

const wireframe = () => {
  return (
    <div className='wireframe'>
      <div className='wireframe-left'>
        <h2>WEB DEVELOPMENT</h2>
        <p>
          Malesuada fames ac turpis egestas. Consequat ac felis donec et odio
          pellentesque diam volutpat. Commodo odio aenean sed adipiscing.
          Lobortis feugiat vivamus at augue eget. Mauris nunc congue nisi vitae.
          Nunc sed blandit libero volutpat sed.
        </p>
        <p>
          Id porta nibh venenatis cras sed felis eget velit aliquet. Sagittis
          purus sit amet volutpat. Dui accumsan sit amet nulla. Risus feugiat in
          ante metus dictum. Ullamcorper velit sed ullamcorper morbi tincidunt
          ornare massa eget egestas.
        </p>
      </div>
      <div className='wireframe-right'>
        <div className='wireframe-right__heading'>
          <h2>WIREFRAME</h2>
          <p>
            Malesuada fames ac turpis egestas. Consequat ac felis donec et odio
            pellentesque diam volutpat.
          </p>
        </div>
        <div className='wireframe-right__info'>
          <div className='wireframe-right__info--list'>
            <h3>Custom List</h3>
            <p>Some heading</p>
            <ul className='wireframe-right__info--items'>
              <li className='wireframe-right__info--item'>
                Sunt aut facere repellat provident occaecati
              </li>
              <li className='wireframe-right__info--item'>Qui est esse</li>
              <li className='wireframe-right__info--item'>
                Ea molestias quasi exercitationem repellat qui
              </li>
              <li className='wireframe-right__info--item'>
                Eum et est occaecati
              </li>
            </ul>
          </div>
          <div className='wireframe-right__info--description'>
            <h3>Web Development</h3>
            <p>
              Id porta nibh venenatis cras sed felis eget velit aliquet.
              Sagittis purus sit amet volutpat. Ullamcorper velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wireframe;
