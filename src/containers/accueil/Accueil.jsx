import React from 'react';
import './accueil.css';
import img from "../../assets/Fitmack2.png";
const Accueil = () => (
      <div id='Accueil' className="acc-all">
          
          <div className="acc-title">MICKAEL <span class="acc-sun">O</span>LANIER</div>
          <div className="acc-cnt">
            <div className="acc-txt">“Ce qui sépare l’information de la transformation ? Le passage à l’action”</div>
            <div className="acc-btn">Passer à l'action !</div>
          </div>
          
          <div className="acc-image">
                <div class='acc-forme'>
                    <img className="acc-bando" src={img} alt=""></img>
                </div>
          </div>
      </div>
);

export default Accueil;