
import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";

const WelcomeProgram = () => {
  const history = useHistory();

  const sendToQuiz = () => {
    history.push(RoutesLiterals.quiz);
  }

  return (
    <div className="container-center container-centerx">
      <h3 style={{textAlign: "center", fontSize: "20px", marginBottom: "0px"}}>Bienvenida al Programa Anti-inflamatorio.</h3>
      <p>Para comenzar ve el video de instrucciones.</p>
      <iframe style={{marginBottom: "20px"}} className="reto-video" src="https://www.youtube.com/embed/lYcpwR1XDYs" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button type="submit" onClick={sendToQuiz} className="primary-button" style={{marginBottom: "20px", marginTop: "-5px", padding: "10px 40px"}}>Comenzar la Evaluación</button>
    </div>
  )
};

export default WelcomeProgram;