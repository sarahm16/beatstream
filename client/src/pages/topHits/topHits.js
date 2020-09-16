import React, {Component} from 'react';
import axios from 'axios';

import API from '../../utils/API';

class TopHits extends Component {

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return(
            <div>Top Hits</div>
        )
    }

}

export default TopHits;