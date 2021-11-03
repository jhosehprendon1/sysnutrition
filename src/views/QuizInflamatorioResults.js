
import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";

const QuizInflamatorioResults = ({systemsScore}) => {
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
        return " - Te encuentras en un grupo de inflamación alto y debes seguir una Dieta de Eliminación y Anti-inflamatoria."
      } else {
        return " - Te encuentras en un grupo de inflamación leve, puedes seguir una Dieta de Eliminación y Anti-inflamatoria."
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

    const sendToRetoPayment = () => {
      window.location.href = "https://mesana.co/reto-payment"
    }
  
    return (
      <div className="container-center">
        <h3>Tus Resultados Finales</h3>
        <div className="quiz-content-card-total">
          <p style={{fontWeight: "bold"}}>Puntaje General</p>
          <p className={totalScore > 15 ? "score-severe": "score-normal"} style={{fontSize: "30px", marginTop: "-10px"}}>{totalScore} {totalScore >= 15 ? "🔥" : "😊"}</p>
        </div>
        <div className="quiz-content-card-total">
          <p style={{fontWeight: "bold"}}>Diagnostico y Explicación</p>
          <div style={{textAlign: "left"}}>
            <p>{programToFollow()}</p>
            <p> - Los sistemas (abajo) con puntajes igual o mayor a 8 (en rojo) necesitan atención inmediata. Una dieta anti-inflamatoria te ayudará.</p>
            <p>{showPoly()}</p>
          </div>
        </div>
        <div className="quiz-content-card-total">
        <p style={{marginTop: "20px", fontWeight: "bold"}}>Sigue el Reto de Alimentación Anti-inflamatoria de 5 dias y comenzarás a ver cambios positivos en tu cuerpo.</p>
          <p>Recibirás una Guia en PDF y videos que contienen:</p>
          <ul style={{textAlign: "left", fontSize: "16px", lineHeight: "25px"}}>
            <li>Menú de 5 dias con desayuno, almuerzo y cena</li>
            <li>Recetas e instrucciones de preparación</li>
            <li>Lista de alimentos inflamatorios que debes evitar</li>
            <li>Lista de alimentos antiinflamatorios que puedes incluir</li>
            <li>Acceso a grupo privado de Facebook donde podrás aclarar tus dudas</li>
            <li>Videos donde aprenderás las bases de una alimentación antiinflamatoria y prácticas que te ayudarán a obtener resultados</li>
          </ul>
          <p><strong><span style={{textDecoration: 'line-through', color: 'red', fontSize: "25px"}}>$80</span></strong></p>
          <p style={{marginTop: '-20px', color: '#00b300', fontSize: '40px'}}><strong>$15</strong></p>
          <button type="submit" onClick={sendToRetoPayment} className="primary-button" style={{padding: "10px 25px", margin: "-25px 0 18px 0"}}>Realizar Pago del Reto</button>
        </div>
        <div className="quiz-content-card-total leyend-card">
          <p style={{fontWeight: "bold"}}>Leyenda:</p>
          <p style={{fontSize: "15px", marginTop: "-14px"}}>Verifica los colores en cada resultado de tus sistemas</p>
        <div className="leyend-results">
          <div className="leyend-normal"></div>
          <p>Perfil Normal (Sin inflamación)</p>
        </div>
        <div className="leyend-results">
          <div className="leyend-some"></div>
          <p>Tienes algo de inflamación</p>
        </div>
        <div className="leyend-results">
          <div className="leyend-warn"></div>
          <p>Inflamación en progreso  (Prestar atención)</p>
        </div>
        <div className="leyend-results">
          <div className="leyend-severe"></div>
          <p>Inflamación significativa (Acción inmediata)</p>
        </div>
        </div>
        <div className="quiz-results">
          <div className="quiz-results-summary">
            <p>Sistema <br></br>Cerebral</p>
            <p className={checkSeverity(brainScore)}>{brainScore}</p>
          </div>
          <div className="quiz-results-summary">
            <p>Sistema <br></br>Digestivo</p>
            <p className={checkSeverity(digestScore)}>{digestScore}</p>
          </div>
          <div className="quiz-results-summary">
            <p>Sistema de <br></br>Detoxificación</p>
            <p className={checkSeverity(detoxScore)}>{detoxScore}</p>
          </div>
          <div className="quiz-results-summary">
            <p>Sangre Azucar/Insulina</p>
            <p className={checkSeverity(sugarScore)}>{sugarScore}</p>
          </div>
          <div className="quiz-results-summary">
            <p>Sistema <br></br>Hormonal</p>
            <p className={checkSeverity(hormoScore)}>{hormoScore}</p>
          </div>
          <div className="quiz-results-summary">
            <p>Sistema <br></br>Muscular y Oseo</p>
            <p className={checkSeverity(muscularScore)}>{muscularScore}</p>
          </div>
          <div className="quiz-results-summary">
            <p>Sistema <br></br>Autoinmune</p>
            <p className={checkSeverity(immuneScore)}>{immuneScore}</p>
          </div>
        </div>
      </div>
    )
  } else {
    const sendToQuiz = () => {
      history.push(RoutesLiterals.quizInflamatorio);

    }
    return (
      <div className="container-center">
        <button type="submit" onClick={sendToQuiz} className="primary-button" style={{marginTop: "50px", padding: "10px 25px"}}>Volver a completar el Quiz</button>
      </div>
    )
  }
};

export default QuizInflamatorioResults;