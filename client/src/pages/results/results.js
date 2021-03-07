import React, {Component} from 'react';

import API from '../../utils/API';

import Album from '../../components/album/album';
import Navbar from '../../components/navbar/navbar';

import './style.css';

class Results extends Component {
    constructor() {
        super();
        this.state={
            artist: '',
            albums: [],
            artistID: 0
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
            })
    }

    componentDidMount = (props) => {
        let artist = this.props.match.params.artist;
        // this.setState({
        //     artist: artist
        // })

        // API.getArtist(artist)
        //     .then(res => {
        //         console.log(res)
        //     })
        this.initializeComponent(artist);
    }

    componentWillReceiveProps = (nextProps) => {
        //allows user to perform consecutive searches
        let artist = nextProps.match.params.artist;
        //this.setState({artist: artist});
        this.initializeComponent(artist)
    }

    displayTracks = () => {
        //console.log('tracklist');
        console.log(this.state.artist);
        API.getTrackList(this.state.artistID)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return(
            <div>
                <Navbar />
                
                {/* <h1 className='title bg-light'>{this.props.location.state.query}</h1> */}
                <div className='container'>
                    <div className='artist-header row'>
                        <div className='col-lg-9'><h1>{this.state.artist}</h1></div>
                        <div className='col-lg-3 toggle'>
                            <button>Albums</button>
                            <button onClick={this.displayTracks}>Tracklist</button>
                        </div>
                    </div>
                    <div className='row'>
                        {this.state.albums.map(album => {
                            // console.log(album)
                            return(
                                <div className='col-lg-4'><Album album={album.album} artist={album.artist.name} /></div>
                            )
                        })
                    }</div>
                </div>
            </div>
        )
    }
}

export default Results;