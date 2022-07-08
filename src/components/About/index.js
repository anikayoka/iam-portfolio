import React from 'react'

function About() {

  return (
    <section className="my-5" >
      {/* <h1 id="about">Who I AM?</h1> */}
      <img src={process.env.PUBLIC_URL + '/assets/images/aboutpic.png'} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
        <p>
        Full stack web developer with graphic design experience, leveraging a finance/accounting background. Recent graduate of University of Toronto coding bootcamp - newly developed skills in JavaScript, HTML, CSS, MERN: MongoDB Express.js React Node.js, SQL, APIs, Graphql and more. My aim is to develop as a software engineer and engage my audience for an impactful user experience. Known as a problem solver with a meticulous nature, passionate about web development and all things numbers related. I am excited to power my skills as part of a fast-paced, quality-driven team to build better experiences on the web and to help solidify my talents as a web developer.
      </p>
      </div>
    </section>
  )
}

export default About