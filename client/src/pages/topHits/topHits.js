import React, {Component} from 'react';
import axios from 'axios';

import API from '../../utils/API';

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
                })}
            </div>
        )
    }

}

export default TopHits;