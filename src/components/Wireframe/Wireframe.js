import React from 'react';
import './Wireframe.css';

const wireframe = props => {
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
              {props.posts.map(post => {
                let title = post.title;
                let titleArr = title.split(' ');
                if (titleArr.length > 6) {
                  title = titleArr.slice(0, 6).join(' ') + '...';
                }
                title = title.charAt(0).toUpperCase() + title.slice(1);

                return (
                  <li
                    key={post.userId + post.id}
                    className='wireframe-right__info--item'
                  >
                    {title}
                  </li>
                );
              })}
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
