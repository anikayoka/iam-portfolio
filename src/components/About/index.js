import React from 'react';

function About() {

  return (
    <div className="about-container">
      <section className="aboutHeader my-5" >
        <h2 className="text-center">Welcome<span className='exclaim'>!</span></h2>
        <img src={process.env.PUBLIC_URL + '/assets/images/aboutpic.jpg'} className="aboutImage my-5 mx-auto d-block" style={{ width: "20%" }} alt="Anika McLean" />
        <div className="aboutText text-center">
          <p>
            <span className="aboutSpan">Full Stack Web Developer</span> with graphic design experience, leveraging a finance/accounting background. A recent graduate of University of Toronto coding bootcamp, with newly developed skills in <span className='aboutSpan'>JavaScript, HTML, CSS, MERN: MongoDB Express.js React Node.js</span> to name a few.
            <br />
            <br />I aim to evolve as a software engineer and engage my audience for an impactful user experience. Known as a problem solver with a meticulous nature, passionate about web development and all things numbers related. I am excited to power my skills as part of a fast-paced, quality-driven team to build better experiences on the web and to help solidify my talents as a web developer.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About;