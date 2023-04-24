import React from "react";
import "./card.css";
import preclogo from "../../assets/preclogo.png";
//import pdfblanc from "../../assets/blanc.pdf";

import { Link } from "react-router-dom";
function Card(id) {
  const textbyid = () => {
    return "" + id.id;
  };
  const tabLink = ["/service1","/service2","/service3","/service4"];
  console.log(parseInt(id.id))
  const linkbyid = () => {
    return tabLink[parseInt(id.id)];
  };
  return (
    <div className="prec-all">
      <div className="prec-title">{textbyid()}</div>
      <div className="prec-in">
        <Link to={linkbyid()}>
          <img className="prec-logo" src={preclogo} alt="" />
        </Link>
      </div>
    </div>
  );
}
export default Card;
