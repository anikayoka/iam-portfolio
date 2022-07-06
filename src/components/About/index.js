import React from 'react'
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who I AM?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Full stack web developer with graphic design experience, leveraging a finance/accounting background. Currently learning full stack development with the University of Toronto, newly developed skills in JavaScript, HTML, CSS, MERN: MongoDB Express.js React Node.js, SQL, APIs, Graphql. I will receive a certificate upon completion, along with more sophisticated coding language knowledge. With each project/assignment my aim is to develop as a software engineer and engage my audience for an impactful user experience. Known as a problem solver with a meticulous nature, passionate about web development and all things numbers related, I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web and to help solidify my new found skills as a web developer.
      </p>
      </div>
    </section>
  )
}

export default About