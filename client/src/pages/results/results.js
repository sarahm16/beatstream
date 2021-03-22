import React, {Component} from 'react';

import API from '../../utils/API';

import Album from '../../components/album/album';
import Navbar from '../../components/navbar/navbar';
import Widget from '../../components/widget/widget';
import NoResults from '../../components/noResults/noResults';

//import axios from 'axios';

import './style.css';

class Results extends Component {
    constructor() {
        super();
        this.state={
            artist: '',
            albums: [],
            artistID: 0,
            toggle: 'albums',
            tracklist: [],
            noResults: false,
            bio: ''
        }
    }

    initializeComponent = (artist) => {
        let albumList = [];
        let albumIDs = [];

        API.getArtist(artist)
            .then(res => {
                console.log(res.data.artist.bio.summary)
                this.setState({
                    bio: res.data.artist.bio.summary
                })
            })

        API.searchQuery(artist)
            .then(res => {
                console.log(res);
                if(res.data.data.length === 0) {
                    console.log('no results')
                    this.setState({
                        noResults: true
                    })
                }

                else {
                    //push unique albums to albumList, prevents album duplicates
                    for(let i=0; i<res.data.data.length; i++) {
                        let albumID = res.data.data[i].album.id;
                        if(albumIDs.indexOf(albumID) === -1) {
                            albumIDs.push(albumID);
                            albumList.push(res.data.data[i])
                        }
                    }

                    this.setState({
                        albums: albumList,
                        artist: res.data.data[0].artist.name,
                        artistID: res.data.data[0].artist.id
                    })

                    API.getTrackList(res.data.data[0].artist.id)
                        .then(res => {
                            console.log(res)
                            this.setState({
                                tracklist: res.data.data
                            })
                        })
                }
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

    displayAlbums = () => {
        this.setState({
            toggle: 'albums'
        })
    }

    displayTracks = () => {
        this.setState({
            toggle: 'tracklist'
        })
    }

    render() {
        return(
            <div>
                <Navbar />

                {this.state.noResults && <NoResults />}
                
                {/* <h1 className='title bg-light'>{this.props.location.state.query}</h1> */}
                {!this.state.noResults &&
                    <div className='container-fluid results-container'>
                        <div className='row'>
                            <div className='col-lg-3 artist-bio'>
                                <h1>{this.state.artist}</h1>
                                <div>{this.state.bio}</div>
                            </div>

                            <div className='col-lg-9'>
                                <div className='row toggle'>
                                    <div className='buttons'>
                                        <button 
                                            onClick={this.displayAlbums}
                                            id='albums-button'
                                            className={this.state.toggle === 'albums' ? 'active-button' : 'inactive-button'}>
                                                Albums
                                        </button>
                                        <button 
                                            onClick={this.displayTracks}
                                            id='tracklist-button'
                                            className={this.state.toggle === 'tracklist' ? 'active-button' : 'inactive-button'}>
                                                Tracklist
                                        </button>
                                    </div>
                                </div>
                                <div className='row albums'>
                                    {this.state.albums.map(album => {
                                        // console.log(album)
                                        return(
                                            <div className='col-lg-4'><Album album={album.album}  /></div>
                                        )
                                    })
                                }</div>
                            </div>
                        </div>




                </div>}
            </div>
        )
    }
}

export default Results;