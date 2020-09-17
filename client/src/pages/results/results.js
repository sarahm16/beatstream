import React, {Component} from 'react';

import API from '../../utils/API';

class Results extends Component {

    componentDidMount = (props) => {
        console.log(this.props.location.state.query);
        API.searchQuery(this.props.location.state.query)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return(
            <div>Results</div>
        )
    }
}

export default Results;