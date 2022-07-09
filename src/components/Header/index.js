import React from "react";
import Nav from "../Nav";

// import { useState } from "react";

// import About from "../About";

// import Projects from "../Projects";
// import Contact from "../Contact";
// import Resume from "../Resume";

const Header = (props) => {
  const { categories = [], currentCategory, setCurrentCategory } = props;

  return (
    <div className="mb-3">
      <header className="py-1">
        <div className="">
          <div className="container">
            <div className="text-center">
              <h1 className="navTitle">Anika McLean</h1>
              <nav className="text-right">
                <Nav categories={categories}
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}>

                </Nav>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
// const Header = () => {
//   const [currentPage, setCurrentPage] = useState('About');

//   // TODO: Add a comment describing the functionality of this method
//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Projects />;
//     }
//     if (currentPage === 'Contact') {
//       return <Contact />;
//     }
//     if (currentPage === 'Resume') {
//       return <Resume />;
//     }

//     return <About />;
//   };


//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* // TODO: Add a comment describing what we are passing as props */}
//       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* // TODO: Add a comment explaining what is happening on the following line */}
//       {renderPage()}
//     </div>
//   );
// }

