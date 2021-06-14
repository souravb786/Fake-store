import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import '../styles/Home.css';
import Footer from '../components/Footer';
import ProductFeed from '../components/ProductFeed'
import DevicesIcon from '@material-ui/icons/Devices';
import '../styles/Home.css'
function Home() {
    
  return (
    <div className="home">
        <Header />
        <ProductFeed />
        <Footer></Footer>
    </div>
  );
}

export default Home
