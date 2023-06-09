import React from 'react';
import './accueilPage.css';
import Navbar from "../navbar/Navbar";
import Accueil from "../accueil/Accueil";
import Citation from "../citation/Citation";
import Presentation from "../presentation/Presentation";
import Prestation from "../prestation/Prestation";
import Contact from "../contact/Contact";
import Demarche from "../demarche/Demarche";
import Tarif from "../tarif/Tarif";
import follow from "../../assets/Follow.png"
function AccueilPage() {
    document.body.classList.remove('col-black')
    document.body.classList.add('col-white')
return(
      <div className="Acc-p">
    <Navbar />
    <Accueil />
    <Citation />
    <Presentation/>
    <Prestation />
    <Demarche />
    <Tarif />
    <a href="https://www.instagram.com/_fitmack/?hl=fr">
    <img className="Acc-Follow" src={follow} alt="" />
    </a>
    
    <Contact />
    </div>   
);
}

export default AccueilPage;
