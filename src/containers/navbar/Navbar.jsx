import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleLogoClick = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div class="menu">
      {/* <img className="icon" src={Logo} alt="" onClick={handleLogoClick} /> */}
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
          <a className="menu-item" href="#Accueil" onClick={handleLogoClick}>
            Accueil
          </a>
          <a className="menu-item" href="#presentation" onClick={handleLogoClick}>
            Presentation
          </a>
          <a className="menu-item" href="#prestation" onClick={handleLogoClick}>
            Prestation
          </a>
          <a className="menu-item" href="#contact" onClick={handleLogoClick}>
            Me Contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
