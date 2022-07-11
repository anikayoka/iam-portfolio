import React from "react";
import { FaGithub, FaPhoneSquare, FaReact } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footerWrapper w-100 p-4">
      <div className="footer-container">&copy;2022 by Anika McLean</div>
      <div className="footerList">
          <li className="mx-3"><a target="_blank" rel="noreferrer" href="https://github.com/anikayoka" className="gitIcon"> <FaGithub /> </a>
          </li>
          <li className="mx-3"><a target="_blank" rel="noreferrer" href="mailto:aniokadesigns@gmail.com" className="emailIcon"> <HiOutlineMail /> </a>
          </li>
          <li className="mx-3"><a target="_blank" rel="noreferrer" href="tel:416.768.7795" className="telIcon"> <FaPhoneSquare /> </a>
          </li>
      </div>
      <div className="reactIcon">powered by <span className="fareact"> <FaReact /> </span>

      </div>
    </footer>
  );

};
//     // <div className="footer">
//     //   <div className="footer-list">
//     //     <li className="mx-3">
//     //       Made with ❤️ by Anika McLean
//     //     </li>
//     //     <li className="mx-3">
//     //     <a href="https://github.com/anikayoka"></a><span className="bi bi-github"></span>
//     //     </li>
//     //     <li className="mx-3">
//     //     &copy; 2022 Portfolio, Inc.
//     //     </li>
//     //    </div> 
//     // </div>
//   );
// }

export default Footer;
