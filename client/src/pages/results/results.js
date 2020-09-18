import React, {Component} from 'react';

import API from '../../utils/API';

class Results extends Component {
    constructor() {
        super();
        this.state={
            albums: []
        }
    }

    componentDidMount = (props) => {
        console.log(this.props.location.state.query);
        API.searchQuery(this.props.location.state.query)
            .then(res => {
                this.setState({
                    albums: res.data.data
                })
                console.log(res.data.data);
            })
    }

    render() {
        return(
            <div>{this.state.albums.map(album => {
                return(
                    <div>{album.album.title}</div>
                )
            })
            }</div>
        )
    }
}

export default Results;