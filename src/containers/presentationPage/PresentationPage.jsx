import React from "react";
import "./presentationPage.css";
import bandoH480 from "../../assets/PpresH480.png";
import bandoH1048 from "../../assets/PpresH1048.png";
import bandoB480 from "../../assets/PpresB480.png";
import bandoB1048 from "../../assets/PpresB1048.png";
function PresentationPage() {
    document.body.classList.add('col-green')
    document.body.classList.remove('col-grey')
    return(
    <div className="prePage-all">
        <div className="prePage-cont1">
            <div className="prePage-image1">
                <img className="prePage-480 prePage-bando" src={bandoH480} alt=""></img>
                <img className="prePage-1048 prePage-bando" src={bandoH1048} alt=""></img>
            </div>
            <div className="prePage-contxt1">
                <div className="prePage-titre1 prePage-title-font">
                    Mon Parcours
                </div>
                <div className="prePage-txt1-1 prePage-txt-font">
                Je m'appelle Mickaël, Diplomé du Bpejeps AF de Toulouse et coach sportif depuis deux ans. 
Depuis mon enfance je pratique du sport qui est devenu ma passion et tout naturellement c'est sur la voie de coach que je me suis diriger. 
Et depuis c'est un véritable plaisir d'encourager et de suivre des personnes en quêtes de leurs objectifs. 
                </div>
                <div className="prePage-txt1-2 prePage-txt-font">
                Mon parcours : Brevet professionnel BPJEPS Activité de la forme (AF) 2 ans – professeur de fitness en salle de remise en forme Certifications : Pilates / Body Pump
                </div>
                <div className="prePage-txt1-3 prePage-txt-font">
                Ma détermination lors des séances de coaching et de vous faire découvrir et apprécier une sensation de bien être qui vous poussera à vous dépenser à chaque instant. 
Ensemble nous accomplirons vos objectifs à la hauteur de vos attentes et nous mettrons tout en place pour y parvenir.
                </div>
            </div>
        </div>
        <div className="prePage-cont2">
            <div className="prePage-contxt2">
                <div className="prePage-titre2 prePage-title-font">
                    Mon Parcours
                </div>
                <div className="prePage-txt2-1 prePage-txt-font">
                Je m'appelle Mickaël, Diplomé du Bpejeps AF de Toulouse et coach sportif depuis deux ans. 
Depuis mon enfance je pratique du sport qui est devenu ma passion et tout naturellement c'est sur la voie de coach que je me suis diriger. 
Et depuis c'est un véritable plaisir d'encourager et de suivre des personnes en quêtes de leurs objectifs. 
                </div>
                <div className="prePage-txt2-2 prePage-txt-font">
                Mon parcours : Brevet professionnel BPJEPS Activité de la forme (AF) 2 ans – professeur de fitness en salle de remise en forme Certifications : Pilates / Body Pump
                </div>
                <div className="prePage-txt2-3 prePage-txt-font">
                Ma détermination lors des séances de coaching et de vous faire découvrir et apprécier une sensation de bien être qui vous pousseras a vous dépenser à chaque instant. 
Ensemble nous accomplirons vos objectifs à la hauteur de vos attentes et nous mettrons tout en place pour y parvenir.
                </div>
            </div>
            <div className="prePage-image2">
                <img className="prePage-480 prePage-bando2" src={bandoB480} alt=""></img>
                <img className="prePage-1048 prePage-bando" src={bandoB1048} alt=""></img>
            </div>
        </div>
    </div>
    
    );
}
export default PresentationPage;