import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from './Home'
import Game from './Game'
import Decision from './Decision'

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/decision"
            element={<Decision />} />
        <Route path="/game"
            element={<Game />} />
        <Route path="/"
            element={<Home />} />
    </Routes>
</Router>
  );
}

export default App;
