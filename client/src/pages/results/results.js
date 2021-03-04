import React, {Component} from 'react';

import API from '../../utils/API';

import Album from '../../components/album/album';
import Navbar from '../../components/navbar/navbar';

import './style.css';

class Results extends Component {
    constructor() {
        super();
        this.state={
            albums: []
        }
    }

    initializeComponent = (artist) => {
        API.searchQuery(artist)
            .then(res => {
                this.setState({
                    albums: res.data.data
                })
            })
    }

    componentDidMount = (props) => {
        console.log(this.props.match.params.artist)
        let artist = this.props.match.params.artist;
        this.initializeComponent(artist)
        // console.log(this.props.location.state.query);
        
    }

    componentWillReceiveProps = (nextProps) => {
        let artist = nextProps.match.params.artist;
        this.initializeComponent(artist)
    }

    render() {
        return(
            <div>
                <Navbar />
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