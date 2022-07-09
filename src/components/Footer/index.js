import React from "react";
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footerWrapper w-100 mt-auto p-4">
      <div className="container">&copy;2022 by Anika McLean</div>
      <div className="gitFooter">
        <a target="_blank" rel="noreferrer" href="https://github.com/anikayoka" className="gitIcon"> <FaGithub /> </a>
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
