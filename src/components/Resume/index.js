import React from "react"

const Resume = () => {
  return (
    <div className="resume">
      <h1 className="resHeader text-center">Resume</h1>
      <a className="resLink" href="https://drive.google.com/file/d/1zp7DZcsgyyUFzogt1V9TJdBN2uJ1g63p/view?usp=sharing" download="Anika McLean - Web Developer.pdf">Download Resume</a>
      <div className="resWrapper text-center">
        <div>
          <h3>Backend Expertise</h3>
          <ul>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>GraphQL</li>
            <li>IndexedDB</li>
            <li>LocalStorage</li>
            <li>APIs</li>
          </ul>
        </div>
        <div>
          <h3>DevTool Expertise</h3>
          <ul>
            <li>Github</li>
            <li>NPM</li>
            <li>Webpack</li>
            <li>Chrome DevTools</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div>
          <h3>Frontend Expertise</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>JQuery</li>
            <li>Handlebars.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;