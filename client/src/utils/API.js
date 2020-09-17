import React from 'react';

import axios from 'axios';

const API = {

    searchQuery(query) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
        )
    },

    getArtist(artist) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${artist}`)
        )
    },

    getTrackList(artist) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/${artist}`)
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