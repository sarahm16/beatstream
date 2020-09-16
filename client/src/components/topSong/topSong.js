import React from 'react';

import './style.css';

const TopSong = (props) => {

    function playSong() {
        let audioEl = document.getElementById(props.track.title);
        audioEl.play()
    }

    return(
        <div>
            <img src={props.track.artist.picture} /> <br />
            {props.track.artist.name} <br />
            {props.track.title} <br />
            <audio src={props.track.preview} id={props.track.title} /> <br />
            <button onClick={playSong}>Play</button>
        </div>
    )
}

export default TopSong