import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/shop/:id' element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
