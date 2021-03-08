import React, {Component} from 'react';

import API from '../../utils/API';

import TopSong from '../../components/topSong/topSong';
import Navbar from '../../components/navbar/navbar';

import './style.css';

class TopHits extends Component {
    state={
        tracks: [],
        song: ''
    }

    componentDidMount() {
        API.getTopHits()
        .then(res=> {
            console.log(res.data.tracks.data)
            this.setState({
                tracks: res.data.tracks.data
            })
        })
    }

    changePlaying = (song) => {
        this.setState({
            currentSong: song
        })
        console.log(song)
    }

    render() {
        return(
            <div>
                <Navbar />
                <div>
                    <h2 className='title bg-light'>Top Hits</h2>
                    <div className='container-fluid top-hits'>
                        <div className='row'>
                            {this.state.tracks.map(track => {
                                // console.log(track);
                                return(
                                    <div className='col-lg-4 top-hit'>
                                        <TopSong track={track} changePlaying={(song) => this.changePlaying(song)} isPlaying={this.state.currentSong === track.title ? true : false} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TopHits;