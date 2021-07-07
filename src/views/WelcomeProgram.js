
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
      <h3 style={{textAlign: "center"}}>Felicidades, Haz terminado la fase de evaluación</h3>
      <div className="quiz-content-card-total">
        <p>VIDEO DE BIENVENIDA</p>
      </div>
      <button type="submit" onClick={sendToQuiz} className="primary-button" style={{marginBottom: "20px", marginTop: "-5px", padding: "10px 40px"}}>Comenzar la Evaluación</button>
    </div>
  )
};

export default WelcomeProgram;