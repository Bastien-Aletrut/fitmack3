import React from 'react';
import './accueilPage.css';
import Navbar from "../navbar/Navbar";
import Accueil from "../accueil/Accueil";
import Citation from "../citation/Citation";
import Presentation from "../presentation/Presentation";
import Prestation from "../prestation/Prestation";
import Contact from "../contact/Contact";
function AccueilPage() {
    document.body.classList.remove('col-green')
    document.body.classList.add('col-grey')
return(
      <div className="Acc-p">
    <Navbar />
    <Accueil />
    <Citation />
    <Presentation/>
    <Prestation />
    <Contact />
    </div>  
    
);
}

export default AccueilPage;
