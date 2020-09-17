import React, {Component} from 'react';
import axios from 'axios';

import API from '../../utils/API';

import TopSong from '../../components/topSong/topSong';

import './style.css';

class TopHits extends Component {
    state={tracks: []}

    componentDidMount() {
        API.getTopHits()
        .then(res=> {
            console.log(res.data.tracks.data)
            this.setState({
                tracks: res.data.tracks.data
            })
        })
    }

    render() {
        return(
            <div className='container top-hits'>
                <h1 className='title'>Top Hits</h1>
                <div className='row'>
                    {this.state.tracks.map(track => {
                        console.log(track);
                        return(
                            <div className='col-lg-4'>
                                <TopSong track={track} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default TopHits;