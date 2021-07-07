
import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";

const QuizResults = ({systemsScore}) => {

  const history = useHistory();

  if (systemsScore.brain) {
    const brainScore = Object.values(systemsScore.brain).reduce((a, b) => a + b, 0)
    const digestScore = Object.values(systemsScore.digestive).reduce((a, b) => a + b, 0)
    const detoxScore = Object.values(systemsScore.detox).reduce((a, b) => a + b, 0)
    const sugarScore = Object.values(systemsScore.blood).reduce((a, b) => a + b, 0)
    const hormoScore = Object.values(systemsScore.hormonal).reduce((a, b) => a + b, 0)
    const muscularScore = Object.values(systemsScore.muscular).reduce((a, b) => a + b, 0)
    const immuneScore = Object.values(systemsScore.autoimmune).reduce((a, b) => a + b, 0)
    const totalScore = brainScore + digestScore + detoxScore + sugarScore + hormoScore + muscularScore + immuneScore
    const scoreArray = [brainScore, digestScore, detoxScore, sugarScore, hormoScore, muscularScore, immuneScore]

    const programToFollow = () => {
      if (totalScore > 15 || scoreArray.filter(el => el >= 8).length > 1) {
        return " - Te encuentras en un grupo de inflamación alto y debes seguir el programa de Eliminación de 8 semanas."
      } else {
        return " - Te encuentras en un grupo de inflamación leve, puedes seguir el programa de Eliminación de 4 semanas."
      }
    }

    const showPoly = () => {
      return scoreArray.filter(el => el >= 8).length > 1 ? " - Tuviste dos o más sistemas en rojo. Tienes el perfil de Poly-inflamación. Debemos trabajar en más de un sistema." : null
    }

    const checkSeverity = (systemScore) => {
      if (systemScore <= 2 ) {
        return "score-normal"
      }

      if (systemScore <= 5) {
        return "score-some"
      }

      if (systemScore <= 7) {
        return "score-warn"
      }

      if (systemScore >= 8) {
        return "score-severe"
      }
    }

    const sendToSymptoms = () => {
      history.push(RoutesLiterals.symptoms);
    }
  
    return (
      <div className="container-center">
        <h3>Tus Resultados Finales</h3>
        <div className="quiz-content-card-total">
          <p>Puntaje General</p>
          <p className={totalScore > 15 ? "score-severe": "score-normal"} style={{fontSize: "30px", marginTop: "-10px"}}>{totalScore} {totalScore >= 15 ? "🔥" : "😊"}</p>
        </div>
        <div className="quiz-content-card-total">
          <p>Diagnostico y Explicación</p>
          <div style={{textAlign: "left"}}>
            <p> - Los sistemas con puntajes igual o mayor a 8 (en rojo) necesitan atención inmediata. El programa de eliminación te ayudará.</p>
            <p>{showPoly()}</p>
            <p>{programToFollow()}</p>
          </div>
          <button type="submit" onClick={sendToSymptoms} className="primary-button" style={{padding: "10px 25px", marginBottom: "18px"}}>Continuar con el Programa</button>
        </div>
        <div className="quiz-content-card-total leyend-card">
        <div className="leyend">
          <div className="leyend-normal"></div>
          <p>Perfil Normal (Sin inflamación)</p>
        </div>
        <div className="leyend">
          <div className="leyend-some"></div>
          <p>Tienes algo de inflamación</p>
        </div>
        <div className="leyend">
          <div className="leyend-warn"></div>
          <p>Inflamación en progreso  (Prestar atención)</p>
        </div>
        <div className="leyend">
          <div className="leyend-severe"></div>
          <p>Inflamación significativa (Acción inmediata)</p>
        </div>
        </div>
        <div className="quiz-results">
          <div className="quiz-results-card">
            <p>Sistema <br></br>Cerebral</p>
            <p className={checkSeverity(brainScore)}>{brainScore}</p>
          </div>
          <div className="quiz-results-card">
            <p>Sistema <br></br>Digestivo</p>
            <p className={checkSeverity(digestScore)}>{digestScore}</p>
          </div>
          <div className="quiz-results-card">
            <p>Sistema de <br></br>Detoxificación</p>
            <p className={checkSeverity(detoxScore)}>{detoxScore}</p>
          </div>
          <div className="quiz-results-card">
            <p>Sangre Azucar/Insulina</p>
            <p className={checkSeverity(sugarScore)}>{sugarScore}</p>
          </div>
          <div className="quiz-results-card">
            <p>Sistema <br></br>Hormonal</p>
            <p className={checkSeverity(hormoScore)}>{hormoScore}</p>
          </div>
          <div className="quiz-results-card">
            <p>Sistema <br></br>Muscular y Oseo</p>
            <p className={checkSeverity(muscularScore)}>{muscularScore}</p>
          </div>
          <div className="quiz-results-card">
            <p>Sistema <br></br>Autoinmune</p>
            <p className={checkSeverity(immuneScore)}>{immuneScore}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
};

export default QuizResults;