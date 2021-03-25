import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Album = (props) => {

    // console.log(props.album)


    return(
        <div>
            <div className='album'>
                {/* <Link to={{
                    pathname: `/trackList/${props.album.id}`,
                    state: {
                        image: props.album['cover_medium'],
                        title: props.album.title,
                        artist: props.artist
                    }
                }}>
                    <img src={props.album['cover_medium']} className='album-cover' />
                    
                </Link> */}
                <button onClick={() => props.displayAlbum()}>
                    <img src={props.album['cover_medium']} className='album-cover' />
                </button>
                <div className='results-album-title'><h5>{props.album.title}</h5></div>
            </div>
        </div>
    )
}

export default Album;