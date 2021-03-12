import React, {Component} from 'react';

import API from '../../utils/API';

import Album from '../../components/album/album';
import Navbar from '../../components/navbar/navbar';
import Widget from '../../components/widget/widget';

import './style.css';

class Results extends Component {
    constructor() {
        super();
        this.state={
            artist: '',
            albums: [],
            artistID: 0,
            toggle: 'albums',
            tracklist: []
        }
    }

    initializeComponent = (artist) => {
        let albumList = [];
        let albumIDs = [];

        API.searchQuery(artist)
            .then(res => {
                console.log(res);
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
                
                {/* <h1 className='title bg-light'>{this.props.location.state.query}</h1> */}
                <div className='container-fluid results-container'>
                    <div className='artist-header row'>
                        <div className='col-lg-9 artist-header-title h1'>{this.state.artist}</div>
                        <div className='col-lg-3 toggle'>
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
                    {this.state.toggle === 'albums' && <div className='row albums'>
                        {this.state.albums.map(album => {
                            // console.log(album)
                            return(
                                <div className='col-lg-4'><Album album={album.album} artist={album.artist.name} /></div>
                            )
                        })
                    }</div>}
                    {this.state.toggle === 'tracklist' &&
                        <div className='container-fluid results-tracklist'>
                            {this.state.tracklist.map(track => {
                                return(
                                    <div className='artist-track'><Widget track={track} page='results' /></div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Results;