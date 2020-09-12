import React, { Component } from 'react';

class Widget extends Component {
	constructor(props) {
		super(props);
		this.state={
			preview: props.track.preview,
			title: props.track.title
		}
	}

	playSong = () => {
		let audioEl = document.getElementById(this.state.title);
		audioEl.play();
	}

	render() {
		return(
			<div className='container'>
				<div className='row'>
					<div className='col-lg-1 image'>
						{/* <img src={this.props.track.}></img> */}
					</div>
					<div className='col-lg-9 title'>
						<audio id={this.state.title} src={this.state.preview}></audio>
						<h6>{this.state.title}</h6>
					</div>
					<div className='col-lg-2'>
						<button onClick={this.playSong}>Play</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Widget;