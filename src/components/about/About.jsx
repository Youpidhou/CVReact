import React from "react"
import {Data} from "../../Data";

const About = () => {
  return(
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          {Data.FirstName}
          <span className="text-primary"> {Data.LastName}</span>
        </h1>
        
        <div className="subheading mb-5">
          {Data.Address} · {Data.Telephone} · 
          <a className="bs-info" href="mailto:beauchemin.miguel@gmail.com">{Data.Email}</a>
        </div>
        <p className="lead mb-5">
          Je suis un étudiant au Collège Lasalle au programme intitulé :
          Programmeur-analyste en Technologies de l'information. J'ai un champ de
          compétences diversifiées et une solide expérience professionnelle.
        </p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/miguel-beauchemin-281522293/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="https://github.com/Youpidhou">
            <i className="fab fa-github"></i>
          </a>
          <a className="social-icon" href="https://www.facebook.com/profile.php?id=100089265510110">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div> 
    </section>
  )};
  export default About;
  