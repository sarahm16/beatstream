import React from 'react';

const TopSong = (props) => {

    //const [ title, preview ] = props.track;

    function playSong() {
        let audioEl = document.getElementById(props.track.title);
        audioEl.play()
    }

    return(
        <div>
            <img src={props.track.artist.picture} />
            {props.track.title}
            <audio src={props.track.preview} id={props.track.title} />
            <button onClick={playSong}>Play</button>
        </div>
    )
}

export default TopSong