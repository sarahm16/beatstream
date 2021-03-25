import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Widget from '../widget/widget';

import './style.css';

class Search extends Component {
    constructor() {
        super();
        this.state={
            query: ''
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        return(
            <div>
                <div className='search'>
                    <input type='text' id='query' onChange={this.onChange} placeholder='Search Artists'></input>
                    <Link to={`/results/${this.state.query}`}><button className='search'><i className="fas fa-search search-icon"></i></button></Link>
                </div>
            </div>
        )
    }
}

export default Search;