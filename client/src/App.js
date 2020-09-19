import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';
import Results from './pages/results/results';
import TopHits from './pages/topHits/topHits';
import TrackList from './pages/trackList/trackList';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path='/results' render={(props) => <Results {...props} />} />
        <Route exact path='/trackList' render={(props) => <TrackList {...props} />} />
        <Route exact path='/' component={withRouter(TopHits)} />
      </Router>
      {/* <Search /> */}
    </div>
  );
}

export default App;
