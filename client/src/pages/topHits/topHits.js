import React, {Component} from 'react';
import axios from 'axios';

import API from '../../utils/API';

import TopSong from '../../components/topSong/topSong';
import Navbar from '../../components/navbar/navbar';

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
                                        <TopSong track={track} />
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