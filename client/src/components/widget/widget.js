import React, { Component } from 'react';

class Widget extends Component {
	constructor(props) {
		super(props);
		this.state={
			preview: props.preview,
			title: props.title
		}
	}

	playSong = () => {
		let audioEl = document.getElementById(this.props.track.title);
		audioEl.play();
	}

	render() {
		return(
			<div>
				<h6>{this.props.track.title}</h6>
				<audio id={this.props.track.title} src={this.props.track.preview}></audio>
				<button onClick={this.playSong}>Play</button>
			</div>
		)
	}
}

export default Widget;