import axios from 'axios';

const API = {

    searchQuery(query) {
        return(
            axios.get(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=artist:'${query}'`)
        )
    },

    getArtist(artist) {
        return(
            axios.get(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist/?q=${artist}`)
        )
    },

    getTrackList(artistID) {
        return(
            axios.get(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${artistID}/top?limit=50`)
        )
    },

    getTopHits() {
        return(
            axios.get('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart')

        )
    }
}

export default API;