import React from 'react';
import Navbar from './Navbar';
import HomeCenter1 from './HomeCenter1';
import HomeCenter2 from './HomeCenter2';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <HomeCenter1 />
      <HomeCenter2 />
      <Footer/>
    </div>
  );
}

export default LandingPage;
