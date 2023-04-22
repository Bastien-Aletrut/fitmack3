import React from "react";
import "./demarchePage.css";
import bando from "../../assets/Pdem2.svg";
import { Link } from "react-router-dom";
function DemarchePage() {
    document.body.classList.add('col-yellow')
    document.body.classList.remove('col-grey')
    return(
    <div className="demPage-all">
            <Link to="/#demarche">
                <div className="demPage-menu">
                    <div className="demPage-close">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Link>
            
            <div className="demPage-image">
                <div class='demPage-forme'>
                    <img className="demPage-bando" src={bando} alt=""></img>
                </div>
            </div>
            <div class='demPage-boxbando'></div>
            <div className="demPage-contxt">
                <div className="demPage-titre demPage-title-font">
                Démarche
                </div>
                <div className="demPage-txt1 demPage-txt-font">
                Tu me contactes via mails ou insta, suite à cela je tenvoie une fiche me permettant de faire ton bilan morphologique ainsi que le reste puis on planifie un premier entretien téléphonique ou physique si possibilité (gratuit et sans engagement) pour discuter de tes objectifs plus en détail pour finir avec un test d'aptitude physique.
                </div>
                <div className="demPage-txt2 demPage-txt-font">
                Si tu es partant(e) pour commencer un programme d'entraînement online ou du training à domicile, je te prépare ton programme sur mesure pour atteindre ces fameux objectifs !​​
                </div>
                <div className="demPage-txt3 demPage-txt-font">
                Pour le coaching online, tu t'entraînes où tu veux, juste à suivre le plan d'entraînement et de nutrition !
                </div>
            </div>
    </div>
    
    );
}
export default DemarchePage;