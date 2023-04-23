import React from "react";
import "./demarchePage.css";
import bando480 from "../../assets/Pdem480.png";
import bando1048 from "../../assets/Pdem1048.png";
import { Link } from "react-router-dom";
function DemarchePage() {
    document.body.classList.add('col-yellow')
    document.body.classList.remove('col-grey')

    var width = document.body.offsetWidth
    var img=0
    if (width>480){
        img=bando1048
    }else{
        img=bando480
    }

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
                    <img className="demPage-bando" src={img} alt=""></img>
                </div>
            </div>
            <div class='demPage-boxbando'></div>
            <div className="demPage-contxt">
                <div className="demPage-titre demPage-title-font demPage-txt">
                Démarche
                </div>
                <div className="demPage-txt1 demPage-txt-font demPage-txt">
                Tu me contactes via mails ou insta, suite à cela je tenvoie une fiche me permettant de faire ton bilan morphologique ainsi que le reste puis on planifie un premier entretien téléphonique ou physique si possibilité (gratuit et sans engagement) pour discuter de tes objectifs plus en détail pour finir avec un test d'aptitude physique.
                </div>
                <div className="demPage-txt2 demPage-txt-font demPage-txt">
                Si tu es partant(e) pour commencer un programme d'entraînement online ou du training à domicile, je te prépare ton programme sur mesure pour atteindre ces fameux objectifs !​​
                </div>
                <div className="demPage-txt3 demPage-txt-font demPage-txt">
                Pour le coaching online, tu t'entraînes où tu veux, juste à suivre le plan d'entraînement et de nutrition !
                </div>
            </div>
    </div>
    
    );
}
export default DemarchePage;