import React from 'react';

import axios from 'axios';

const API = {

    getArtist(artist) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${artist}`)
        )
    },

    getTrackList(artist) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/${artist}`)
        )
    }
}

export default API;