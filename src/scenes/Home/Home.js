import React from 'react';
import Header from '../../components/Header/Header';
import HomeBody from './components/HomeBody/HomeBody';
import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <HomeBody />
    </div>
  );
}

export default Home;
