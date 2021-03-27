import React from 'react';

import './style.css';

const Album = (props) => {

    // console.log(props.album)


    return(
        <div>
            <div className='album'>
                <button className='album-cover-button' onClick={() => props.displayAlbum()}>
                    <img src={props.album['cover_medium']} className='album-cover' alt='album cover' />
                </button>
                <div className='results-album-title'><h5>{props.album.title}</h5></div>
            </div>
        </div>
    )
}

export default Album;