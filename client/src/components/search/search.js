import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Widget from '../widget/widget';

import API from '../../utils/API';

import './style.css';

class Search extends Component {
    constructor() {
        super();
        this.state={
            artist: '',
            song: '',
            trackList: [],
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
        console.log(this.state.artist);
    }

    search = () => {
        // console.log('you clicked a button!');

        // API.getArtist(this.state.artist)
        //     .then(res => {
        //         //API.getTrackList(res.data.data[0].tracklist)
        //         axios.get(`https://cors-anywhere.herokuapp.com/${res.data.data[0].tracklist}`)
        //         .then(res => {
        //             let trackList = res.data.data;
        //             this.setState({
        //                 isSubmitted: true,
        //                 trackList: [...this.state.trackList, ...trackList]
        //             })
        //         })
        //     })
        return(
            <Redirect to={{
                pathname: '/results',
                state: {test: 'testing'}
            }} />
        )
    }

    render() {
        return(
            <div>
                <div className='search'>
                    <input type='text' id='artist' onChange={this.onChange} placeholder='artist'></input>
                    <button onClick={this.search} className='search'><i className="fas fa-search"></i></button>
                </div>

                {this.state.isSubmitted && 
                    this.state.trackList.map(track => {
                        return(
                            <Widget track={track}/>
                            // <div>{track.title}</div>
                        )
                    })}

            </div>
        )
    }
}

export default Search;