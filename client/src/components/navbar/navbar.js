import React from 'react';

import './style.css';

import Search from '../search/search';

function Navbar() {
    return(
        // <div className='header'>
        //     <div className='title'><h1><i className="fas fa-music"></i> BeatStream</h1></div>
        //     <div className='search'></div>
        // </div>
        // <h1 className='header'><i className="fas fa-music"></i> BeatStream</h1>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <span className="navbar-brand h1"><i className="fas fa-music"></i> Beatstream</span>
            <form className="form-inline">
                <Search />
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button>Search</button> */}
            </form>
        </nav>
    )
}

export default Navbar;