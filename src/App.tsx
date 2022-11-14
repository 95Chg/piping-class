import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotExistPage from './pages/NotExistPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="*" element={<NotExistPage></NotExistPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
