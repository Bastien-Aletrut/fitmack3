import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleLogoClick = () => {
    setIsOpened((isOpened) => !isOpened);
  };
  
  function scrollToAccueil() {
    const Accueil = document.querySelector('#Accueil');
    Accueil.scrollIntoView({
      smooth: true
    });
    handleLogoClick();
  }
  function scrollToPresentation() {
    const Presentation = document.querySelector('#Presentation');
    Presentation.scrollIntoView({
      smooth: true
    });
    handleLogoClick();
  }
  function scrollToContact() {
    const Contact = document.querySelector('#Contact');
    Contact.scrollIntoView({
      smooth: true
    });
    handleLogoClick();
  }

  function scrollToPrestation() {
    const Prestation = document.querySelector('#Prestation');
    Prestation.scrollIntoView({
      smooth: true
    });
    handleLogoClick();
  }
  
  return (
    <div class="menu">
      <div className={`menu-icon1 ${isOpened ? "menu-icon1-1" : ""}`}>

        <div className={`menu-icon2 ${isOpened ? "menu-icon2-1" : ""}`} onClick={handleLogoClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
    <div className={`menu-nav ${isOpened ? "menu-opened" : ""}`}>
        
        <div className="menu-ligne">MICKAEL OLANIER</div>
        <div className="menu-items">
          <a className="menu-item" href="#Accueil" onClick={scrollToAccueil}>
            Accueil
          </a>
          <a className="menu-item" href="#Presentation" onClick={scrollToPresentation}>
            Presentation
          </a>
          <a className="menu-item" href="#Prestation" onClick={scrollToPrestation}>
            Prestation
          </a>
          <a className="menu-item" href="#Contact" onClick={scrollToContact}>
            Me Contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
