import axios from 'axios';

const API = {

    searchQuery(query) {
        return(
            axios.get(`/search?q=artist:'${query}'`)
        )
    },

    getArtist(artist) {
        return(
            axios.get(`/search/artist/?q=${artist}`)
        )
    },

    getTrackList(artistID) {
        return(
            axios.get(`/artist/${artistID}/top?limit=50`)
        )
    },

    getTopHits() {
        return(
            axios.get('/chart')
        )
    }
}

export default API;