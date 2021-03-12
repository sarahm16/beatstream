import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Search from '../search/search';

function Navbar() {
    return(
        <nav className="navbar navbar-light justify-content-between">
            <Link to='/'><span className="h2"><i className="fas fa-music"></i> Beatstream</span></Link>
            <form className="form-inline">
                <Search />
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button>Search</button> */}
            </form>
        </nav>
    )
}

export default Navbar;