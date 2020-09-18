import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

import API from '../../utils/API';

const TopSong = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function playSong() {
        let audioEl = document.getElementById(props.track.title);
        audioEl.play();
        setIsPlaying(true);
    }

    function pauseSong() {
        let audioEl = document.getElementById(props.track.title);
        audioEl.pause();
        setIsPlaying(false);
    }

    function getArtist() {
        setRedirect(true);
        //console.log(props.track.artist.name);
        // API.getArtist(props.track.artist.name)
        //     .then(res => {
        //         console.log(res)
        //     })
        //console.log(props.track.artist);
    }

    if(redirect) {
        return(
            <Redirect to={{
                pathname: '/results',
                state: {query: props.track.artist.name}
            }} />
        )
    }

    return(
        <div>
            <div className='image'>
                <img src={props.track.artist['picture_medium']} /> <br />
                {!isPlaying && 
                    <button onClick={playSong} className='play'>
                        <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                        </svg>
                    </button>
                }
                {isPlaying &&
                    <button onClick={pauseSong} className='pause'>
                        <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-pause-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </button>}
            </div>
            <div className='song-info'>
                <button onClick={getArtist}><h4 className='artist'>{props.track.artist.name}</h4></button>
                <br />{props.track.title} <br />
                <audio src={props.track.preview} id={props.track.title} /> <br />
            </div>
        </div>
    )
}

export default TopSong