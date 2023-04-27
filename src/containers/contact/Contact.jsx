import React from "react";
import "./contact.css";
import instalogo from "../../assets/instalogo.png";
function Contact() {
  
  // function envoyerMail() {
  //   var nom = document.getElementById("con-nom").value;
  //   var prenom = document.getElementById("con-prenom").value;
  //   var offre = document.getElementById("con-offre").value;
  
  //   var message = "Bonjour, je suis " + nom + " " + prenom + " et je suis intéressé(e) par votre offre " + offre + ".";
   
  //   var lien = "mailto:destinataire@exemple.com?subject=Demande d'information&body=" + encodeURIComponent(message);
  //   window.location.href = lien;
  // }
  // function saisie(event) {
  //   // Vérifie si la touche pressée est une lettre (a-z ou A-Z)
  //   const id = event.target.id;
  //   var input = document.getElementById(id);

  //   var pxLetters = [7,8,8,8,7,6,9,8,3,4,8,6,11,8,8,7,9,8,6,7,8,7,11,7,7,7];
  //  var allowedLetters = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //  var txt = input.value;
  //  var nb=0;
  //   if ((event.keyCode >= 65 && event.keyCode <= 90) && input.value.length<10){
  //     // Vérifie si la lettre est autorisée
  //     var letter = String.fromCharCode(event.keyCode).toLowerCase();
  //     if (allowedLetters.indexOf(letter) === -1) {
  //       // Empêche la saisie du caractère
  //       event.preventDefault();
  //     }
  // else{
  //  //taille lettre
   
  //  nb=pxLetters[allowedLetters.indexOf(letter)];
  //  for (let i = 0; i < txt.length; i++) {
  //         nb=nb+pxLetters[allowedLetters.indexOf(txt.charAt(i))];
  //       }
  //  console.log(nb);
  //  input.style.width=nb+ "px";
  // }
  //   } else if (event.keyCode === 8) {
  //     // Autorise la touche de retour arrière
  
  // //taille lettre
   
  //  nb=0;
  //  for (let i = 0; i < txt.length-1; i++) {
  //         nb=nb+pxLetters[allowedLetters.indexOf(txt.charAt(i))];
  //       }
   
  //  if(nb===0){
  //  txt = input.placeholder;
  //  for (let i = 0; i < txt.length; i++) {
  //           nb=nb+pxLetters[allowedLetters.indexOf(txt.charAt(i))];
  //  }
  //  }
  //  console.log(nb);
  //  input.style.width=nb+ "px";
  //   } else {
  //     // Empêche la saisie pour les touches non lettres
  //     event.preventDefault();
  //   }
  // }

  return(
  <div id="Contact" className="con-all">
  <div className="con-title">ME CONTACTER</div>
    {/* <div className="con-txt1">Vous pouvez me contacter via Instagram en cliquant sur le lien ci-dessous</div> */}
    <div className="con-in">
      <a href="https://www.instagram.com/_fitmack/?hl=fr">
        <div className="con-lien">
            <img className="con-instalogo" src={instalogo} alt="" />
            <div className="con-in-titre">Fitmack</div>
        </div>
      </a>
    </div>
    {/* <div className="con-txt2">Ou en m'envoyant un mail en remlissant le formulaire</div>
    <div className="con-txt2">
      "Bonjour, je suis &nbsp;
    </div>
    <div className="con-txt2">
          <input type="text" onKeyDown={saisie} id="con-prenom" class="con-autoresize" placeholder="prenom"/>
          <input type="text" onKeyDown={saisie} id="con-nom" class="con-autoresize" placeholder="nom"/>
    <div className="con-txt2">
      et je suis intéressé(e) par votre offre 
    </div>      
          <input type="text" id="con-offre"/>
          ."
    </div>
    <button className="con-btn" onClick={envoyerMail}>Envoyer</button> */}
  </div>
);
  }

export default Contact;
