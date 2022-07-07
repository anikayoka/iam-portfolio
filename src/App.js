import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <Header /> */}
    <main> 
      <About />
      <Projects />
      {/* <Contact />
      <Resume /> */}
    </main>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
