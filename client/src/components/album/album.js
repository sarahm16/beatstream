import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './style.css';

const Album = (props) => {

    const [ redirect, setRedirect ] = useState(false);

    function getTrackList() {
        //console.log('props');
        //console.log(props.album.tracklist)
        // axios.get(`https://cors-anywhere.herokuapp.com/${props.album.tracklist}`)
        //     .then(res => {
        //         console.log('tracklist');
        //         console.log(res);
        //         setRedirect(true);
        //     })
        setRedirect(true);
    }

    if(redirect) {
        console.log('props.album');
        console.log(props.album);
        return(
            <Redirect to={{
                pathname: '/trackList',
                state: {
                    tracklist: props.album.tracklist,
                    album: props.album
                }
            }} />
        )
    }

    return(
        <div>
            <img src={props.album['cover_medium']} className='album-cover' />
            <div className='album'>
                <button onClick={getTrackList} className='album-button'><h4>{props.album.title}</h4></button>
            </div>
        </div>
    )
}

export default Album;