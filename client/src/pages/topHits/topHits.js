import React, {Component} from 'react';
import axios from 'axios';

import API from '../../utils/API';

import TopSong from '../../components/topSong/topSong';

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
                {this.state.tracks.map(track => {
                    console.log(track)
                    return(
                        <TopSong title={track.title} />
                    )
                })}
            </div>
        )
    }

}

export default TopHits;