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
				<div className='row'>
					{/* <div className='col-lg-1 image'>
						<img src={this.props.image} />
						<img src={this.props.track.album['cover_small']}></img>
					</div> */}
					<div className='col-lg-10 song-title'>
						<audio id={this.state.title} src={this.state.preview}></audio>
						<h4>{this.state.title}</h4>
						{/* <h6 className='album-title'>{this.props.title}</h6> */}
					</div>
					<div className='col-lg-2'>
						{!this.state.isPlaying && <button onClick={this.playSong} className='play-button'><i className="fas fa-play"></i></button>}
						{this.state.isPlaying && <button onClick={this.pauseSong} className='pause-button'><i className="fas fa-pause"></i></button>}
					</div>
				</div>
			</div>
		)
	}
}

export default Widget;