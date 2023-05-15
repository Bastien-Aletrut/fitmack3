import React from "react";
import "./contact.css";
import footer from "../../assets/Footer.png"
function Contact() {
  function envoyerMail() {
    var message = document.getElementById("con-message").value;
    var message2 = document.getElementById("con-message2").value;
    
    var lien = "mailto:mickael.olanier@gmail.com?subject=Demande d'information&body=" + encodeURIComponent(message+message2);
    window.location.href = lien;
  }
  return(
<div className="con-all">
                <div id="Contact" className="con-title">
                  Contact
                </div>
                <div className="con-txt">
                Contact moi via mail ou Instagram. 
                </div>
                <div className="con-box">
                  <div className="con-box3">
                    <div className="con-box2">
                      <div className="con-txt2">
                      MON EMAIL
                      </div>
                      <input id="con-email2" value="mickael.olanier@gmail.com" type="text" readonly/>
                      <div className="con-txt2">
                      MESSAGE
                      </div>
                      <textarea id="con-message2" rows="5"></textarea>
                    </div>
                    <div className="con-box4">
                      <input id="con-email" value="mickael.olanier@gmail.com" type="text" readonly/>
                      <textarea id="con-message" rows="5"></textarea>
                    </div>
                  </div>
                  <input onClick={envoyerMail} id="con-submit" type="button" value="Envoyer"/>
                </div>
                <img className="con-footer" src={footer} alt="" />
            </div>
);
  }

export default Contact;
