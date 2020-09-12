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
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
        console.log(this.state.artist);
    }

    search = () => {
        console.log('you clicked a button!');

        API.getArtist(this.state.artist);
        
        this.setState({
            isSubmitted: true
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