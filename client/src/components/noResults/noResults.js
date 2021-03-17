import React from 'react';

import './style.css';

function NoResults() {
    return(
        <div className='no-results-container'>
            <h1 className='oops'>Oops!</h1>
            <div>No results matched your search.</div>
            {/* <div>Please try a different search or</div> */}
            <div className='top-hits-link'>
                <a href='/' style={{ textDecoration: 'none', underline: 'none' }}><i className="fas fa-arrow-left"></i> Top Hits</a>
            </div>
        </div>
    )
}

export default NoResults;