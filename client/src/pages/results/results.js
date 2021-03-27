import React, {Component} from 'react';

import API from '../../utils/API';

import Album from '../../components/album/album';
import Navbar from '../../components/navbar/navbar';
import NoResults from '../../components/noResults/noResults';
import TrackList from '../trackList/trackList';
import AlbumTracklist from '../albumTracklist/albumTracklist';

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
            image: '',
            albumCover: '',
            albumTitle: '',
            albumTracklist: [],
            displayBio: false
        }
    }

    initializeComponent = (artist) => {
        let albumList = [];
        let albumIDs = [];

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


                    API.getArtist(artist)
                    .then(res => {
                        console.log(res.data.artist.image)
                        this.setState({
                            // image: res.data.artist.image[2]['#text'],
                            bio: res.data.artist.bio.summary
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

    toggle(toggleComponent) {
        this.setState({
            toggle: toggleComponent
        })
    }

    displayAlbum = (album) => {
        console.log(album)
        console.log(album.album.tracklist)
        // axios.get(album.album.tracklist)
        //     .then(res => {
        //         console.log(res)
        //     })

        API.getAlbumTracklist(album.album.id)
            .then(res => {
                console.log(res)
                this.setState({
                    toggle: 'albumTracklist',
                    albumTracklist: res.data.data,
                    albumCover: album.album['cover_small'],
                    albumTitle: album.album.title
                })
            })
    }

    displayBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
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
                        <div className='row results'>
                            <div className='col-lg-3 artist-bio'>
                                <img src={this.state.image} className='artist-image' alt='artist' />
                                <h3 className='artist-name'>{this.state.artist}</h3>
                               <div className='small-screen-bio'>
                                    <div className='more-info'>
                                        <button className='more-info-button' onClick={this.displayBio}><i className="fas fa-chevron-down"></i></button>
                                    </div>
                                    <div className={this.state.displayBio ? 'show bio' : 'hide bio'}>{this.state.bio}</div>
                                </div>
                                <div className='large-screen-bio'>
                                    {this.state.bio}
                                </div>
                            </div>

                            <div className='col-lg-9 music-container'>
                                <div className='row toggle'>
                                    {this.state.toggle !== 'albumTracklist' &&
                                        <div className='buttons'>
                                            <button 
                                                onClick={() => this.toggle('albums')}
                                                id='albums-button'
                                                className={this.state.toggle === 'albums' ? 'active-button' : 'inactive-button'}>
                                                    Albums
                                            </button>
                                            <button 
                                                onClick={() => this.toggle('tracklist')}
                                                id='tracklist-button'
                                                className={this.state.toggle === 'tracklist' ? 'active-button' : 'inactive-button'}>
                                                    Tracklist
                                            </button>
                                        </div>
                                    }
                                    {this.state.toggle === 'albumTracklist' &&
                                        <div className='row album-info'>
                                            <div className='col-lg-3 col-12 albums-button'>
                                                <button onClick={() => this.toggle('albums')} className='back-to-albums'><i className="fas fa-long-arrow-alt-left"></i> Albums</button>
                                            </div>
                                            <div className='col-lg-6 col-12 album-tracklist-title' >
                                                <h2>{this.state.albumTitle}</h2>
                                            </div>
                                            <div className='col-lg-3'></div>

                                        </div>
                                    }
                                </div>
                                {this.state.toggle === 'albums' &&
                                    <div className='container'>
                                        <div className='row albums'>
                                            {this.state.albums.map(album => {
                                                // console.log(album)
                                                return(
                                                    <div className='col-lg-4'><Album album={album.album} displayAlbum={() => this.displayAlbum(album)}  /></div>
                                                )
                                            })
                                        }</div>
                                </div>}
                                {this.state.toggle === 'tracklist' &&
                                    <TrackList tracklist={this.state.tracklist}  />
                                }

                                {this.state.toggle === 'albumTracklist' &&
                                    <AlbumTracklist tracklist={this.state.albumTracklist} albumCover={this.state.albumCover} albumTitle={this.state.albumTitle} />}
                            </div>
                        </div>




                </div>}
            </div>
        )
    }
}

export default Results;