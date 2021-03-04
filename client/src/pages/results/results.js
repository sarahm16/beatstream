import React, {Component} from 'react';

import API from '../../utils/API';

import Album from '../../components/album/album';

import './style.css';

class Results extends Component {
    constructor() {
        super();
        this.state={
            albums: []
        }
    }

    componentDidMount = (props) => {
        console.log(this.props.match.params.artist)
        // console.log(this.props.location.state.query);
        API.searchQuery(this.props.match.params.artist)
            .then(res => {
                this.setState({
                    albums: res.data.data
                })
            })
    }

    render() {
        return(
            <div>
                {/* <h1 className='title bg-light'>{this.props.location.state.query}</h1> */}
                <div className='container'>
                    <div className='row'>
                        {this.state.albums.map(album => {
                            return(
                                <div className='col-lg-4'><Album album={album.album} /></div>
                            )
                        })
                    }</div>
                </div>
            </div>
        )
    }
}

export default Results;