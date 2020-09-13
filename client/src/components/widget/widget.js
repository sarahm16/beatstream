import React, { Component } from 'react';

import './style.css';

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

	pauseSong = () => {
		let audioEl = document.getElementById(this.state.title);
		audioEl.pause();
	}

	render() {
		console.log(this.props.track)
		return(
			<div className='container'>
				<div className='row'>
					<div className='col-lg-1 image'>
						<img src={this.props.track.album['cover_small']}></img>
					</div>
					<div className='col-lg-9 title'>
						<audio id={this.state.title} src={this.state.preview}></audio>
						<h3>{this.state.title}</h3>
						<h6 className='album-title'>{this.props.track.album.title}</h6>
					</div>
					<div className='col-lg-2'>
						<button onClick={this.playSong}><i className="fas fa-play"></i></button>
						<button onClick={this.pauseSong}><i className="fas fa-pause"></i></button>
					</div>
				</div>
			</div>
		)
	}
}

export default Widget;