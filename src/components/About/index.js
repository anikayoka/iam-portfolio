import React from 'react';

function About() {

  return (
    <div className="about-container">
      <section className="aboutHeader my-5" >
        <h1 id="about">Who i AM!</h1>
        <img src={process.env.PUBLIC_URL + '/assets/images/aboutpic.jpg'} className="aboutImage my-2" style={{ width: "25%" }} alt="Anika McLean" />
        <div className="my-2">
          <h2>Welcome!</h2>
          <p>
            I am a Full stack web developer with graphic design experience, leveraging a finance/accounting background. A recent graduate of University of Toronto coding bootcamp, with newly developed skills in JavaScript, HTML, CSS, MERN: MongoDB Express.js React Node.js, SQL, APIs, Graphql and more.
            <br />
            I aim to evolve as a software engineer and engage my audience for an impactful user experience. Known as a problem solver with a meticulous nature, passionate about web development and all things numbers related. I am excited to power my skills as part of a fast-paced, quality-driven team to build better experiences on the web and to help solidify my talents as a web developer.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About;