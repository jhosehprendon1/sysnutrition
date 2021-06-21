import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";
import { db } from "../firebase";

const Symptoms = () => {
  const history = useHistory();

  const [state, setState] = useState({
    symptoms: {
      cabeza: false,
      peso: false,
      muscular: false,
      energia: false,
      intestinal: false,
      mental: false,
      depresion: false,
      alergias: false
    }
  })

  const onSelect = (symptom) => {
    setState((prevState) => {
      return {
        ...state,
        symptoms: {
          ...prevState.symptoms,
          [symptom]: !prevState.symptoms[symptom]
        }
      };
    })
  }

  const clickContinue = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    db.collection("users").doc(user.uid).update({symptoms: state.symptoms})
    history.push(RoutesLiterals.welcome);
  }

  const nextButton = () => {
    if (Object.values(state.symptoms).some(el => el)) {
      return (
        <button type="submit" onClick={clickContinue} className="primary-button" style={{marginBottom: "20px", marginTop: "-10px", padding: "0 20px"}}>Continuar al Programa</button>
      )
    }
  }

  return (
    <div className="container-center">
      <h3 style={{textAlign: "center"}}>Muy bien, ya casi estamos listos para comenzar</h3>
      <h3 style={{marginTop: "-10px", textAlign: "center"}}>Ahora, Selecciona los peores sintomas que presentas</h3>
      <p style={{marginTop: "-10px", textAlign: "center"}}>(mínimo 1 - máximo 8)</p>
      {nextButton()}
      <div className="quiz-results">
        <div onClick={() => onSelect("cabeza")} className={state.symptoms.cabeza ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Dolores <br></br>de cabeza</p>
        </div>
        <div onClick={() => onSelect("peso")} className={state.symptoms.peso ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Aumento <br></br>de peso</p>
        </div>
        <div onClick={() => onSelect("muscular")} className={state.symptoms.muscular ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Dolores <br></br>musculares</p>
        </div>
        <div onClick={() => onSelect("energia")} className={state.symptoms.energia ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Falta de <br></br>energía</p>
        </div>
        <div onClick={() => onSelect("intestinal")} className={state.symptoms.intestinal ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Dolores <br></br>intestinales</p>
        </div>
        <div onClick={() => onSelect("mental")} className={state.symptoms.mental ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Niebla <br></br>mental</p>
        </div>
        <div onClick={() => onSelect("depresion")} className={state.symptoms.depresion ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Depresión, <br></br>ansiedad</p>
        </div>
        <div onClick={() => onSelect("alergias")} className={state.symptoms.alergias ? "symptom-results-card symptom-results-card-selected" : "symptom-results-card"}>
          <p>Alergias</p>
        </div>
      </div>
    </div>
  )
};

export default Symptoms;