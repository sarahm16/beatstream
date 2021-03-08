import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Widget from '../widget/widget';

import './style.css';

class Search extends Component {
    constructor() {
        super();
        this.state={
            query: '',
            trackList: [],
            isSubmitted: false
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    search = () => {

        

        // API.getArtist(this.state.artist)
        //     .then(res => {
        //         //API.getTrackList(res.data.data[0].tracklist)
        //         axios.get(`https://cors-anywhere.herokuapp.com/${res.data.data[0].tracklist}`)
        //         .then(res => {
        //             let trackList = res.data.data;
        //             this.setState({
        //                 isSubmitted: true,
        //                 trackList: [...this.state.trackList, ...trackList]
        //             })
        //         })
        //     })

            this.setState({isSubmitted: true});
    }

    render() {
        // if(this.state.isSubmitted) {
        //     return(
        //         <Redirect to={{
        //             pathname: '/results',
        //             state: {query: this.state.query}
        //         }} />
        //     )
        // }
        return(
            <div>
                <div className='search'>
                    <input type='text' id='query' onChange={this.onChange} placeholder='Artist, Album, or Song'></input>
                    <Link to={`/results/${this.state.query}`}><button className='search'><i className="fas fa-search"></i></button></Link>
                </div>

                {this.state.isSubmitted && 
                    this.state.trackList.map(track => {
                        return(
                            <Widget track={track}/>
                            // <div>{track.title}</div>
                        )
                    })}

            </div>
        )
    }
}

export default Search;