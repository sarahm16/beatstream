import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Results from './pages/results/results';
import TopHits from './pages/topHits/topHits';
import TrackList from './pages/trackList/trackList';

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Route exact path='/results/:artist' component={Results} />
        <Route exact path='/trackList/:album' component={TrackList} />
        <Route exact path='/' component={TopHits} />
      </Router>
      {/* <Search /> */}
    </div>
  );
}

export default App;
