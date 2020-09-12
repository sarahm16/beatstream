import React from 'react';

import axios from 'axios';

const API = {

    getArtist(artist) {
        return(
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${artist}`)
                .then(res => {
                    console.log(res.data.data[0])
                })
        )
    }
}

export default API;