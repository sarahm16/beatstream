import React, {Component} from 'react';
import axios from 'axios';

import Widget from '../components/widget/widget';

import API from '../utils/API';

class Search extends Component {
    constructor() {
        super();
        this.state={
            artist: '',
            song: '',
            trackList: '',
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
        console.log(this.state.artist);
    }

    search = () => {
        console.log('you clicked a button!');

        API.getArtist(this.state.artist)
            .then(res => {
                //API.getTrackList(res.data.data[0].tracklist)
                axios.get(`https://cors-anywhere.herokuapp.com/${res.data.data[0].tracklist}`)
                .then(trackList => {
                    console.log(trackList)
                    })
                })
        
        this.setState({
            isSubmitted: true,
            trackList: ''
        })
    }

    render() {
        return(
            <div>
                <input type='text' id='artist' onChange={this.onChange} placeholder='artist'></input>
                <button onClick={this.search}>Search</button>
                <Widget />
            </div>
        )
    }
}

export default Search;