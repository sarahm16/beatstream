import React from 'react';

import './style.css';

const Album = (props) => {

    return(
        <div>
            <img src={props.album['cover_medium']} className='album-cover' />
            <h4>{props.album.title}</h4>
        </div>
    )
}

export default Album;