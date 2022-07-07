import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
    <main> 
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
    <Footer />
    </div>
  );
}

export default App;
