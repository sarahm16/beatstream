import React, {Component} from 'react';

import API from '../../utils/API';

import Album from '../../components/album/album';
import Navbar from '../../components/navbar/navbar';
import Widget from '../../components/widget/widget';
import NoResults from '../../components/noResults/noResults';
import TrackList from '../trackList/trackList';

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
            bio: '',
            image: ''
        }
    }

    initializeComponent = (artist) => {
        let albumList = [];
        let albumIDs = [];

        API.getArtist(artist)
            .then(res => {
                console.log(res.data.artist.image)
                this.setState({
                    // image: res.data.artist.image[2]['#text'],
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
                        image: res.data.data[0].artist.picture,
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
                                <img src={this.state.image} className='artist-image' alt='artist image' />
                                <h3 className='artist-name'>{this.state.artist}</h3>
                                <div className='bio'>{this.state.bio}</div>
                            </div>

                            <div className='col-lg-9 music-container'>
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
                                {this.state.toggle === 'albums' &&
                                    <div className='container'>
                                        <div className='row albums'>
                                            {this.state.albums.map(album => {
                                                // console.log(album)
                                                return(
                                                    <div className='col-lg-4'><Album album={album.album}  /></div>
                                                )
                                            })
                                        }</div>
                                </div>}
                                {this.state.toggle === 'tracklist' &&
                                    // <div className='container-fluid results-tracklist'>
                                    //     {this.state.tracklist.map(track => {
                                    //         return(
                                    //             <div className='artist-track'><Widget track={track} page='results' /></div>
                                    //         )
                                    //     })}
                                    // </div>
                                    <TrackList tracklist={this.state.tracklist} />
                                }
                            </div>
                        </div>




                </div>}
            </div>
        )
    }
}

export default Results;