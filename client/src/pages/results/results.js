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
        let albumList = [];
        let albumIDs = [];

        API.searchQuery(artist)
            .then(res => {
                //push unique albums to albumList, prevents album duplicates
                for(let i=0; i<res.data.data.length; i++) {
                    let albumID = res.data.data[i].album.id;
                    if(albumIDs.indexOf(albumID) === -1) {
                        albumIDs.push(albumID);
                        albumList.push(res.data.data[i])
                    }
                }

                this.setState({
                    albums: albumList
                })
            })
    }

    componentDidMount = (props) => {
        let artist = this.props.match.params.artist;
        this.initializeComponent(artist);
    }

    componentWillReceiveProps = (nextProps) => {
        //allows user to perform consecutive searches
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
                            console.log(album)
                            return(
                                <div className='col-lg-4'><Album album={album.album} trackList={album.album.trackList} /></div>
                            )
                        })
                    }</div>
                </div>
            </div>
        )
    }
}

export default Results;