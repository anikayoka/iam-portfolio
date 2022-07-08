import React, { useState } from 'react';

import './App.css';

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  const [categories] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  return (
    <div className='main-container'>
      <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}>
      </Header>

      <main className="content-wrapper">
        {(() => {
          if (currentCategory === 'About') {
            return (
              <div>
                <About></About>
              </div>
            );
          }
          else if (currentCategory === 'Portfolio') {
            return (
              <div>
                <Portfolio></Portfolio>
              </div>
            );
          }
          else if (currentCategory === 'Contact') {
            return (
              <div>
                <Contact></Contact>
              </div>
            );
          } else if (currentCategory === 'Resume') {
            return (
              <div>
                <Resume></Resume>
              </div>

            );
          }
          return <About></About>
        })()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
