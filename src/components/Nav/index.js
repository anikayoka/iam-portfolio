import React from 'react';

const Nav = (props) => {
  const { categories = [], currentCategory, setCurrentCategory } = props;


  return (
    <div className="navbar">
      {categories.map((category) => (
        <li className={`nav px-1 mt-3 col-3 ${  currentCategory === category.name && "enteredNav" }`} key={category.name}>
          <span onClick={() => {setCurrentCategory(category.name); }}>{category.name}</span>
        </li>
      ))}
    </div>
  );
}

export default Nav;

// function Nav ({ currentPage, handlePageChange }) {
//     <ul className="navbar">
//       {/* <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           Anika McLean
//         </a>
//       </li> */}
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           //  TODO: Add a comment explaining what this logic is doing

//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#projects"
//           onClick={() => handlePageChange('Projects')}
//           //  TODO: Add a comment explaining what this logic is doing

//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           //  TODO: Add a comment explaining what this logic is doing

//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           
//           onClick={() => handlePageChange('Resume')}
//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//     </ul>
//   );
// }


