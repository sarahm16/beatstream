import React from 'react';

import './style.css';

const TopSong = (props) => {

    function playSong() {
        let audioEl = document.getElementById(props.track.title);
        audioEl.play()
    }

    return(
        <div>
            <div className='image'>
                <img src={props.track.artist['picture_medium']} /> <br />
                <button onClick={playSong} className='play'>
                    <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                </button>
            </div>
            <div className='song-info'>
                <h4>{props.track.artist.name}</h4>
                {props.track.title} <br />
                <audio src={props.track.preview} id={props.track.title} /> <br />
            </div>
        </div>
    )
}

export default TopSong