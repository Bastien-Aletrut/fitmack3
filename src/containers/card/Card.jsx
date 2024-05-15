import React from "react";
import "./card.css";
import pmm from "../../assets/Pser11048.png";
import rf from "../../assets/Pser21048.png";
import pp from "../../assets/Pser31048.png";
import cp from "../../assets/Pdem1048.png";
import arrow from "../../assets/Arrow2.png";
import { Link } from "react-router-dom";
function Card(id) {
  const tabTitre = [
    "Prise de masse musculaire",
    "Remise en forme",
    "Perte de poids",
    "Force athlétique",
  ];
  const tabImg = [pmm, rf, pp, cp];

  const textbyid = () => {
    return tabTitre[parseInt(id.id)];
  };
  const imgbyid = () => {
    return tabImg[parseInt(id.id)];
  };
  const tabLink = ["/service1", "/service2", "/service3", "/service4"];
  console.log(parseInt(id.id));
  const linkbyid = () => {
    return tabLink[parseInt(id.id)];
  };
  return (
    <Link to={linkbyid()}>
      <div
        className="prec-all"
        style={{
          backgroundImage: `url(${imgbyid()})`,
        }}
      >
        <div className="prec-title">{textbyid()}</div>
        <div className="prec-in">
          <div className="prec-txt">Voir plus</div>
          <img className="prec-icon" src={arrow} alt="" />
        </div>
      </div>
    </Link>
  );
}
export default Card;
