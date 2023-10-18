import React from "react"
import {Data} from "../../Data";

const Footer = () => {
  const Name = Data.FirstName + " " + Data.LastName;
  return(
  <footer className="text-body-secondary py-5">
    <div className="container">
      <p className="float-end mb-1">
        <a href="#">Haut de la page</a>
      </p>
      <p className="mb-1">
        Copyright &copy; {new Date().getFullYear()} {Name}. Tout droit Réserver.
      </p>
    </div>
  </footer>
)};

export default Footer;