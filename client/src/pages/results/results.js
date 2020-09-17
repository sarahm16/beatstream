import React, {Component} from 'react';

class Results extends Component {

    componentDidMount = (props) => {
        console.log(this.props.location.state.test);
    }

    render() {
        return(
            <div>Results</div>
        )
    }
}

export default Results;