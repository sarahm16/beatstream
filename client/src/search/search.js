import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super();
        this.state={
            artist: '',
            song: ''
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
        console.log(this.state.artist);
    }

    search = () => {
        console.log('you clicked a button!');
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${this.state.artist}`)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return(
            <div>
                <input type='text' id='artist' onChange={this.onChange} placeholder='artist'></input>
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}

export default Search;