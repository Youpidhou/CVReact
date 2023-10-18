import React from 'react';
import { Link } from "react-router-dom";
import myphoto from '../../images/MyPhoto.jpg';
import { Data } from "../../Data";


const Navbar = () => {
  const Name = Data.FirstName + " " + Data.LastName;
  return (
<nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav">

      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <a><div className="mb-4">{Name}</div>
        <div className="">
          <img className="img-fluid img-profile square mx-auto mb-2 " src={myphoto} />
        </div>
        </a>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link custom-link">
              <Link to="/About">À Propos</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link">
              <Link to="/Experiences">Experience</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link"> 
              <Link to="/Education">Education</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link">
              <Link to="/Competences">Compétences</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link">
              <Link to="/Interets">Interêts</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link">
              <Link to="/Portfolio">Portfolio</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};
export default Navbar;



