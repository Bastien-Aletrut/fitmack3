import React from "react";
import "./tarif.css";
import File from "../../assets/file.png";
import pdf1 from "../../assets/pdfTarif1.pdf";
import pdf2 from "../../assets/pdfTarif2.pdf";
const Tarif = () => (
  <div id="tarif" className="tarf-all">
    <div className="tarf-title">Tarif</div>
    <div className="tarf-in">
      <a href={pdf1} download="tarifDistance.pdf">
        <div className="tarf-lien1">
          <img className="tarf-logo" src={File} alt="" />
          <div className="tarf-txt">Tarif à distance</div>
        </div>
      </a>
      <a href={pdf2} download="tarifSalle.pdf">
        <div className="tarf-lien1">
          <img className="tarf-logo" src={File} alt="" />
          <div className="tarf-txt">Tarif en salle</div>
        </div>
      </a>
    </div>
  </div>
);
export default Tarif;
