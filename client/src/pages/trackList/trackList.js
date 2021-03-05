import React, { Component } from 'react';
import axios from 'axios';

import Widget from '../../components/widget/widget';
import Navbar from '../../components/navbar/navbar';

import './style.css';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracklist: [],
            image: '',
            title: ''
        }
    }

    componentDidMount() {
        console.log(this.props.location.state.image)
        //console.log(this.props.match.params.album)
        let albumID = this.props.match.params.album;
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumID}/tracks`)
            .then(res => {
                console.log(res)
                this.setState({
                    tracklist: res.data.data
                })
            })
    }

    render() {
        return(
            <div><Navbar />
                <div>
                    <div className='album'>
                        <img src={this.props.location.state.image} />
                    </div>
                    {this.state.tracklist.map(track => {
                        return(
                            <Widget track={track} image={this.state.image} title={this.state.title} />
                        )
                    })}
                </div>
            </div>
        )
    }


    // axios.get(`https://cors-anywhere.herokuapp.com/${props.location.state.tracklist}`)
    //     .then(res => {
    //         console.log('tracklist.js')
    //         //console.log(res.data.data);
    //         res.data.data.map(track => {
    //             console.log(track)
    //             return(
    //                 <div>{track.title}</div>
    //             )
    //         })
    //     })
    // }
}

export default TrackList;