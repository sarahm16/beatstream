import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {

    search = () => {
        console.log('you clicked a button!');
        axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/version/service/id/method/?q=eminem')
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return(
            <button onClick={this.search}>Search</button>
        )
    }
}

export default Search;