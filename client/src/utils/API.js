import React from 'react';

import axios from 'axios';

const API = {

    searchQuery(query) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:'${query}'`)
        )
    },

    getArtist(artist) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${artist}`)
        )
    },

    getTrackList(artistID) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistID}/top?limit=50`)
        )
    },

    getTopHits() {
        return(
            axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
            // .then(res => {
            //     console.log(res);
            // })
        )
    }
}

export default API;