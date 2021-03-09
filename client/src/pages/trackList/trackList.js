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
        //console.log(this.props.location.state.image)
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
                    <div className='album-info-wrapper'>
                        <div className='container album-info'>
                            <div className='row'>
                                {/* <div className='col-lg-4'>
                                    <img src={this.props.location.state.image} className='album-img' />
                                </div>
                                <div className='col-lg-8 album-title'>
                                    <h1>{this.props.location.state.title}</h1>
                                    <h5>{this.props.location.state.artist}</h5>
                                </div> */}
                                    <img src={this.props.location.state.image} className='album-img' />
                                    
                            </div>
                            <div className='row album-title'>
                                <div className='col-lg-12'>
                                <h3>{this.props.location.state.title}</h3>
                                </div>
                                <br />
                                <div className='col-lg-12'><h5>{this.props.location.state.artist}</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className='tracklist-header .display-1'>
                        <h3>Tracklist</h3>
                    </div>
                    <div className='tracklist'>
                        {this.state.tracklist.map(track => {
                            return(
                                <Widget track={track} image={this.state.image} title={this.state.title} />
                            )
                        })}
                    </div>
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