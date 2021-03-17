import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Results from './pages/results/results';
import TopHits from './pages/topHits/topHits';
import TrackList from './pages/trackList/trackList';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Navbar /> */}
        <Route exact path='/results/:artist' component={Results} />
        <Route exact path='/trackList/:album' component={TrackList} />
        <Route exact path='/' component={TopHits} />
      </BrowserRouter>
      {/* <Search /> */}
    </div>
  );
}

export default App;
