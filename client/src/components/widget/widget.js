import React, { Component } from 'react';

import './style.css';

class Widget extends Component {
	constructor(props) {
		super(props);
		this.state={
			preview: props.track.preview,
			title: props.track.title,
			isPlaying: false
		}
	}

	playSong = () => {
		let audioEl = document.getElementById(this.state.title);
		audioEl.play();
		this.setState({
			isPlaying: true
		})
	}

	pauseSong = () => {
		let audioEl = document.getElementById(this.state.title);
		audioEl.pause();
		this.setState({
			isPlaying: false
		})
	}

	render() {
		return(
			<div className='widget'>
				<div className='row widget-row'>
					<div className='col-lg-1 col-2 col-sm-3 album-cover-small'><img src={this.props.albumCover} alt='cover' /></div>
					<div className='col-lg-9 col-sm-8 col-8 song-title'>
						<audio id={this.state.title} src={this.state.preview}></audio>
						<div className='h5'>{this.state.title}</div>
						<div>{this.props.albumTitle}</div>
					</div>
					<div className='col-lg-1 col-sm-1 col-1 buttons'>
						{!this.state.isPlaying && <button onClick={this.playSong} className='play-button'><i className="fas fa-play"></i></button>}
						{this.state.isPlaying && <button onClick={this.pauseSong} className='pause-button'><i className="fas fa-pause"></i></button>}
					</div>
				</div>
			</div>
		)
	}
}

export default Widget;