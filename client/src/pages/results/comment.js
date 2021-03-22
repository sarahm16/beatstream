
                        <div className='artist-header row'>
                        {/* <div className='col-lg-9 artist-header-title h1'>{this.state.artist}</div> */}
                        <div className='col-lg-3 toggle'>
                            <button 
                                onClick={this.displayAlbums}
                                id='albums-button'
                                className={this.state.toggle === 'albums' ? 'active-button' : 'inactive-button'}>
                                    Albums
                            </button>
                            <button 
                                onClick={this.displayTracks}
                                id='tracklist-button'
                                className={this.state.toggle === 'tracklist' ? 'active-button' : 'inactive-button'}>
                                    Tracklist
                            </button>
                        </div>
                    </div>
                    {this.state.toggle === 'albums' && <div className='row albums'>
                        {this.state.albums.map(album => {
                            // console.log(album)
                            return(
                                <div className='col-lg-4'><Album album={album.album} artist={album.artist.name} /></div>
                            )
                        })
                    }</div>}
                    {this.state.toggle === 'tracklist' &&
                        <div className='container-fluid results-tracklist'>
                            {this.state.tracklist.map(track => {
                                return(
                                    <div className='artist-track'><Widget track={track} page='results' /></div>
                                )
                            })}
                        </div>
                    }