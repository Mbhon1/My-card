import React from 'react';
import './App.css';
import Information from './Information';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function App() {
  return (
    <div>
      <main className='main--card'>
        <Information />
        <About />
        <Interests />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
