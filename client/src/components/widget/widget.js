import React, { Component } from 'react';

class Widget extends Component {
	playSong() {
		let audioEl = document.getElementById('audio');
		audioEl.play();
	}

	render() {
		return(
			<div>
				<audio id='audio' src='https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3'></audio>
				<button onClick={this.playSong}>Play</button>
			</div>
		)
	}
}

export default Widget;