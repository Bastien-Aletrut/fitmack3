import React from "react";
import "./contact.css";
import footer from "../../assets/Footer.png"
function Contact() {
  
  return(
<div className="con-all">
                <div className="con-title">
                  Contact
                </div>
                <div className="con-txt">
                Contact moi via mail ou Instagram. 
                </div>
                <div className="con-box">
                  <div className="con-box3">
                    <div className="con-box2">
                      <div className="con-txt2">
                      EMAIL
                      </div>
                      <input id="con-email2" type="text" />
                      <div className="con-txt2">
                      MESSAGE
                      </div>
                      <textarea id="con-message2" rows="5" cols="30"></textarea>
                    </div>
                    <div className="con-box4">
                      <input id="con-email" type="text" />
                      <textarea id="con-message" ></textarea>
                    </div>
                  </div>
                  <input id="con-submit" type="button" value="Envoyer"/>
                </div>
                <img className="con-footer" src={footer} alt="" />
            </div>
);
  }

export default Contact;
