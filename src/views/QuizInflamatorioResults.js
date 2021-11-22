
import React, { useState } from 'react'
import RoutesLiterals from "../RoutesLiterals";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { createContact } from '../store/actions';
import { useHistory } from "react-router-dom";;

const QuizInflamatorioResults = ({systemsScore, createContact, error}) => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

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
        return " - Te encuentras en un grupo de inflamación alto y debes seguir una Dieta de Eliminación y Anti-inflamatoria para reducir los síntomas."
      } else {
        return " - Te encuentras en un grupo de inflamación leve, puedes seguir una Dieta de Eliminación y Anti-inflamatoria para reducir los síntomas."
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

    const renderSpinner = () => {
      if(loading) {
        return (
          <div style ={{marginLeft: '10px'}} className="ui active inline loader"></div>
        )
      } else {
        return null
      }
    }
  
    const onSubmit = (data) => {
      setLoading(true)
      createContact(data, 27, 28, history).then(() => {
        setLoading(false)
      }).catch(e => {
        setLoading(false)
      })
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
        <div className="quiz-content-card-total">
        <p style={{marginTop: "20px", fontWeight: "bold"}}>Comienza a Ver Cambios Positivos en tu Cuerpo. <br></br>Reduce lo Síntomas y Vive Mejor.</p>
        <p style={{fontWeight: "bold"}}>Lo puedes lograr con en el Reto de Alimentación Antiinflamatoria de 5 dias</p>
          <hr></hr>
          <p>En el Reto recibirás una Guia en PDF y videos que contienen:</p>
          <ul style={{textAlign: "left", fontSize: "16px", lineHeight: "25px"}}>
            <li>Menú de 5 dias con desayuno, almuerzo y cena</li>
            <li>Recetas e instrucciones de preparación</li>
            <li>Acceso a grupo privado de Facebook donde podrás aclarar tus dudas</li>
            <li>Videos donde aprenderás las bases de una alimentación antiinflamatoria y prácticas que te ayudarán a obtener resultados</li>
          </ul>
          <hr></hr>
          <p style={{marginTop: "20px"}}>Accede al Reto de Alimentación Antiinflamatoria Gratis</p>
          <form className="form-plan" style={{marginTop: "10px"}} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="full" style={{textAlign: "left"}}>
              <p>Nombre*</p>
              <input
                type='text'
                placeholder='Ej.: Maria Lopez'
                ref={register({ required: true })}
                name='name'
              />
              <p className={errors.name ? "error error-visible" : "error error-hidden"}>Por favor ingresa tu nombre</p>
            </label>
            <label htmlFor="email" className="full" style={{textAlign: "left"}}>
              <p>Email*</p>
              <input
                type='text'
                placeholder='Ej.: maria@gmail.com'
                ref={register({
                  required: true,
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Invalid email address',
                  },
                })}
                name='email'
              />
              <p className={errors.email ? "error error-visible" : "error error-hidden"}>Por favor ingresa un email valido</p>
            </label>
            <p style={{marginBottom: "1px"}} className={error ? "error error-visible" : "error error-hidden"}>El Email ya ha sido registrado o...</p>
            <p className={error ? "error error-visible" : "error error-hidden"}>{error}</p>
            <button type="submit" style={{marginBottom: "20px"}} className="primary-button full">Acceder al Reto</button>
            {renderSpinner()}
          </form>
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

const mapStateToProps = (state) => {
  return {
    error: state.contact.error
  }
}

export default connect(mapStateToProps, {createContact})(QuizInflamatorioResults)