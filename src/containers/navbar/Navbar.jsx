import React, { useState } from "react";
import Logo from "../../assets/x.svg";
import "./navbar.css";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleLogoClick = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div class="menu">
      <img className="icon" src={Logo} alt="" onClick={handleLogoClick} />
      <div className={`menu-nav ${isOpened ? "menu-opened" : ""}`}>
        <img className="icon" src={Logo} alt="" onClick={handleLogoClick} />
        <div className="menu-ligne">MICKAEL OLANIER</div>
        <div className="menu-items">
          <a className="menu-item" href="#Accueil">
            Accueil
          </a>
          <a className="menu-item" href="#presentation">
            Presentation
          </a>
          <a className="menu-item" href="#prestation">
            Prestation
          </a>
          <a className="menu-item" href="#contact">
            Me Contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
