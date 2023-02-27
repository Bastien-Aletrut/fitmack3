import React from "react";
import "./prescard.css";
import preclogo from "../../assets/preclogo.png";
import pdfblanc from "../../assets/blanc.pdf";
function Prescard(id) {
  const textbyid = () => {
    return "" + id.id;
  };
  return (
    <div className="prec-all">
      <div className="prec-title">{textbyid()}</div>
      <div className="prec-in">
        <a href={pdfblanc} download={textbyid() + ".pdf"}>
          <img className="prec-logo" src={preclogo} alt="" />
        </a>
      </div>
    </div>
  );
}
export default Prescard;
