import React from 'react';
import Navbar from './components/navbar/Navbar';
import Ads from './components/ads/Ads';
import Services from './components/services/Services';
import Popular from './components/popular/Popular';
import Recommended from './components/recommended/Recommended';
import ViewMore from './components/viewMore/ViewMore';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Ads/>
        <Services/>
        <Popular/>
        <Recommended/>
        <ViewMore/>
        <Footer/>
    </div>
  )
}
export default App;