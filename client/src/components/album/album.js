import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Album = (props) => {

    // const [ redirect, setRedirect ] = useState(false);

    // function getTrackList() {
    //     //console.log('props');
    //     //console.log(props.album.tracklist)
    //     // axios.get(`https://cors-anywhere.herokuapp.com/${props.album.tracklist}`)
    //     //     .then(res => {
    //     //         console.log('tracklist');
    //     //         console.log(res);
    //     //         setRedirect(true);
    //     //     })
    //     setRedirect(true);
    // }

    // if(redirect) {
    //     console.log('props.album');
    //     console.log(props.album);
    //     return(
    //         <Redirect to={{
    //             pathname: '/trackList',
    //             state: {
    //                 tracklist: props.album.tracklist,
    //                 album: props.album
    //             }
    //         }} />
    //     )
    // }

    return(
        <div>
            <div className='album'>
                <Link to={{
                    pathname: `/trackList/${props.album.id}`,
                    state: {
                        image: props.album['cover_medium'],
                        title: props.album.title,
                        artist: props.artist
                    }
                }}>
                    <img src={props.album['cover_medium']} className='album-cover' />
                    
                </Link>
                <div className='results-album-title'><h5>{props.album.title}</h5></div>
            </div>
        </div>
    )
}

export default Album;