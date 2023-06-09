import React from "react";
import "./tarif.css";
import File from "../../assets/file.png"
import pdf from "../../assets/pdfTarif1.pdf"
const Tarif = () => (
  <div id="tarif" className="tarf-all">
    <div className="tarf-title">Tarif</div>
    <div className="tarf-in">
        <a href={pdf} download="tarif.pdf">
            <div className="tarf-lien1">
                <img className="tarf-logo" src={File} alt="" />
                <div className="tarf-txt">Tarif à distance</div>
            </div>
        </a>
    </div>
  </div>
);
export default Tarif;