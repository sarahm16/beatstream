import React, { Component } from 'react';
import axios from 'axios';

import Widget from '../../components/widget/widget';

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
        //console.log(this.state.album)
        axios.get(`https://cors-anywhere.herokuapp.com/${this.props.location.state.tracklist}`)
            .then(res => {
                //console.log(res.data)
                this.setState({
                    tracklist: res.data.data,
                    image: this.props.location.state.album['cover_small'],
                    title: this.props.location.state.album.title
                })
            })
    }

    render() {
        return(
            <div>
                {this.state.tracklist.map(track => {
                    return(
                        <Widget track={track} image={this.state.image} title={this.state.title} />
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