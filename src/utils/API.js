import axios from 'axios';

const API = {

    searchQuery(query) {
        return(
            axios.get(`/search?q=artist:'${query}'`)
        )
    },

    getArtist(artist) {
        return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=b287ff2c1c76c0da8f617ca184fbfd04&format=json`)
    },

    getTrackList(artistID) {
        return(
            axios.get(`/artist/${artistID}/top?limit=50`)
        )
    },

    getTopHits() {
        return(
            axios.get('https://api.deezer.com/chart')
        )
    },

    getAlbumTracklist(albumID) {
        return(
            axios.get(`/album/${albumID}/tracks`)
        )
    }
}

export default API;