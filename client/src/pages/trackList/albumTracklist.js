import React, { Component } from 'react';

import Widget from '../../components/widget/widget';

import './style.css';


class AlbumTracklist extends Component {

    state = {
        tracklist: []
    }

    componentDidMount = () => {
        console.log(this.props.tracklist)
        this.setState({
            tracklist: this.props.tracklist,
            albumCover: this.props.albumCover
        })
    }

    render() {
        return(
            <div className='container-fluid results-tracklist'>
                {this.state.tracklist.map(track => {
                    return(
                        <div className='artist-track'><Widget track={track} albumCover={this.state.albumCover} /></div>
                    )
                })}
            </div>
        )
    }
}

export default AlbumTracklist;