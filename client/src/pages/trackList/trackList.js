import React, { Component } from 'react';
import axios from 'axios';

class TrackList extends Component {
    constructor() {
        super();
        this.state = {
            tracklist: []
        }
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/${this.props.location.state.tracklist}`)
            .then(res => {
                this.setState({
                    tracklist: res.data.data
                })
            })
    }

    render() {
        return(
            <div>
                {this.state.tracklist.map(track => {
                    return(
                        <h4>{track.title}</h4>
                    )
                })}
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