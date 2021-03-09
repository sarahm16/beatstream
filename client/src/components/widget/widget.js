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
					{this.props.page === 'results' &&
						<div className='col-lg-1'><img src={this.props.track.album['cover_small']} alt='cover' /></div>}
					<div className='col-lg-9 col-sm-9 col-9 song-title'>
						<audio id={this.state.title} src={this.state.preview}></audio>
						<div className='h4'>{this.state.title}</div>
						{this.props.page === 'results' &&
							<div>{this.props.track.album.title}</div>}
						{/* <h6 className='album-title'>{this.props.title}</h6> */}
					</div>
					<div className='col-lg-2 col-sm-2 col-2'>
						{!this.state.isPlaying && <button onClick={this.playSong} className='play-button'><i className="fas fa-play"></i></button>}
						{this.state.isPlaying && <button onClick={this.pauseSong} className='pause-button'><i className="fas fa-pause"></i></button>}
					</div>
				</div>
			</div>
		)
	}
}

export default Widget;