import React from 'react';

const TopSong = (props) => {
    return(
        <div>
        <img src={props.track.artist.picture} />
        {props.track.title}
        </div>
    )
}

export default TopSong