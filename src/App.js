import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Education from "./components/education/Education";
import Competences from "./components/competences/Competences";
import Interets from "./components/interets/Interets";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";


function App(){
    return (
        <div className="App"> 
            <Router>
               <Navbar />
                <Routes>
                    <Route path ="/" element={<About />} />
                    <Route path ="/About" element={<About />} />
                    <Route path ="/Experiences" element={<Experiences />} />
                    <Route path ="/Education" element={<Education />} />
                    <Route path ="/Competences" element={<Competences />} />
                    <Route path ="/Interets" element={<Interets />} />
                    <Route path ="/Portfolio" element={<Portfolio />} />
                </Routes>
            <Footer />
            </Router>
        </div>
       
    );
}

export default App; 



/*<Navbar Name={Data.Name} />
                <main>
                    <About
                    FirstName={Data.FirstName}
                    LastName={Data.LastName}
                    Email={Data.Email}
                    Address={Data.Address}
                    Telephone={Data.Telephone}
                    />
                    <Experiences />
                    <Education />
                    <Competences />
                    <Interets />
                    <Portfolio />
                </main>
                <Footer Name={Data.Name} />*/