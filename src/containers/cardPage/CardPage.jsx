import React from "react";
import "./cardPage.css";
import dem480 from "../../assets/Pdem480.png";
import dem1048 from "../../assets/Pdem1048.png";
import pmm480 from "../../assets/Pdem480.png";
import pmm1048 from "../../assets/Pdem1048.png";
import rf480 from "../../assets/Pdem480.png";
import rf1048 from "../../assets/Pdem1048.png";
import pp480 from "../../assets/Pdem480.png";
import pp1048 from "../../assets/Pdem1048.png";
import cp480 from "../../assets/Pdem480.png";
import cp1048 from "../../assets/Pdem1048.png";
import { Link } from "react-router-dom";
function CardPage(id) {
  const tabTitre = ["Démarche","Prise de masse musculaire", "Remise en forme", "Perte de poids", "Correction posturale "];
  const tabText = 
  [(<>Tu me contactes via mails ou insta, suite à cela je t'envoie une fiche me permettant de faire ton bilan morphologique ainsi que le reste puis on planifie un premier entretien téléphonique ou physique si possibilité (gratuit et sans engagement) pour discuter de tes objectifs plus en détail pour finir avec un test d'aptitude physique. <br /><br /> ​Si tu es partant(e) pour commencer un programme d'entraînement online ou du training à domicile, je te prépare ton programme sur mesure pour atteindre ces fameux objectifs ! <br /><br /> Pour le coaching online, tu t'entraînes où tu veux, juste à suivre le plan d'entraînement et de nutrition !</>),
   "Améliorer son physique et ses performances. Augmenter sa masse musculaire. Adapté à tous les niveaux. Optimiser l’alimentation à travers un suivi et des conseils nutritionnels Programmation basée selon vos qualités et vos faiblesses Structuration et optimisation des séances au travers de cycles réguliers.",
   "Permettre de reprendre une activité physique régulière, afin de se sentir mieux dans son corps. Se renforcer à travers des exercices variés et adaptés. Développer une habitude à travers la pratique physique régulière. Lutter contre la sédentarité. Des séances ludiques et conviviales.", 
   "Réduire sa masse grasse à travers le sport par des exercices de renforcement musculaire et cardio-vasculaire personnalisés selon vos éventuelles pathologies (diabète, articulaires, cardio-vasculaire etc.) Suivi et conseils nutritionnels (définition du métabolisme basal, des apports et dépenses journalières etc.) Programmation personnalisée, mise en place de cycles de travail et d’objectifs réguliers. Maintenir une motivation constante.", 
   "Améliorer sa posture et réduire les douleurs chroniques. Analyse morphologique et pathologique individualisée. Améliorer sa tonicité musculaire, lutter contre les raideurs et le manque de mobilité. Intégrer la programmation à la vie quotidienne pour développer de bonnes habitudes."];
  
  const tabImg480 = [dem480,pmm480,rf480,pp480,cp480];
  const tabImg1048 = [dem1048,pmm1048,rf1048,pp1048,cp1048];
  const tabColor = ["col-yellow","col-grey","col-grey","col-grey","col-grey"];
  const tabNanColor = ["col-grey","col-yellow","col-yellow","col-yellow","col-yellow"];
  
  document.body.classList.add(tabColor[id.id]);
  document.body.classList.remove(tabNanColor[id.id]);

  const titrebyid = () => {
    
    return tabTitre[id.id];
    
  };
  const textbyid = () => {
    return tabText[id.id];
  };
  const imgbyid = () => {
    var width = document.body.offsetWidth
    if (width>480){
        return tabImg1048[id.id];
    }else{
        
        return tabImg480[id.id];
    }
    
  };

  


  return (
    <div className="cardPage-all">
            <Link to="/">
                <div className="cardPage-menu">
                    <div className="cardPage-close">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Link>
            
            <div className="cardPage-image">
                <div class='cardPage-forme'>
                    <img className="cardPage-bando" src={imgbyid()} alt=""></img>
                </div>
            </div>
            <div class='cardPage-boxbando'></div>
            <div className="cardPage-contxt">
                <div className="cardPage-titre cardPage-title-font cardPage-title">
                {titrebyid()}</div>
                <div className="cardPage-txt1 cardPage-txt-font cardPage-txt">
                {textbyid()}
                </div>
            </div>
    </div>
  );
}
export default CardPage;
