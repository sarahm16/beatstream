import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar';
import Results from './pages/results/results';
import TopHits from './pages/topHits/topHits';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route exact path='/' component={TopHits} />
        <Route exact path='/results' component={Results} />
      </Router>
      {/* <Search /> */}
    </div>
  );
}

export default App;
