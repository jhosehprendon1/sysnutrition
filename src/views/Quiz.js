import React, { useState, useEffect } from "react";
import {quizQuestionSpanish} from '../utils/quizQuestions';
import ProgressBar from "@ramonak/react-progress-bar";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";
import { db } from "../firebase";

import '../Quiz.css';

const systems = ["brain", "digestive", "detox", "blood", "hormonal", "muscular", "autoimmune"]
const systemTerms = ["Sistema Cerebral", "Sistema Digestivo", "Sistema de Detoxificación", "Sangre Azucar/Insulina", "Sistema Hormonal", "Sistema Muscular y Oseo", "Sistema Autoinmune"]
const initialState = {
  step: 1,
  system: 0,
  option: null,
  score: {
    brain: {},
    digestive: {},
    detox: {},
    blood: {},
    hormonal: {},
    muscular: {},
    autoimmune: {}
  }
}

const Quiz = ({sendScore}) => {
  const [state, setState] = useState(initialState)
  const [test, setTest] = useState(1)
  const history = useHistory();

  const clickOption = (option) => {
    setTest(state.step)
    setState((prevState) => {
      return {
        ...state,
        step: prevState.step + 1,
        system: state.step % 8 === 0 ? prevState.system + 1: prevState.system,
        option,
        score: {
          ...prevState.score,
          [systems[state.system]]: {
            ...prevState.score[systems[state.system]],
            [state.step]: option
          }
        }
      };
    })

    if (state.step === 56) {
      sendScore(state.score)
      const user = JSON.parse(localStorage.getItem("user"))
      db.collection('users').doc(user.uid).set({...state, quizCompleted: true})
      history.push(RoutesLiterals.quizResults);
      return 
    }

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    if(state.step === 56) {
      setState(() => {
        return {
          ...state,
          score: {
            ...state.score,
            autoimmune: {
              ...state.score.autoimmune,
              56: state.option
            }
          }
        };
      })
    }
  }, [test])

  const resetQuiz = () => {
    setState(initialState)
  }

  const showButton = () => {
    if (state.step > 1) {
      return (
        <button type="submit" onClick={resetQuiz} className="primary-button" style={{marginTop: "50px", padding: "10px 25px"}}>Comenzar de nuevo</button>
      )
    }
  }

  return (
    <div className="container-center">
      <div className="progress-bar">
        <ProgressBar completed={state.system === 6 ? 98 : Math.round((state.system+1)/7*100)} />
      </div>
      <h3>{systemTerms[state.system].toUpperCase()}</h3>
      <div className="quiz-content-card">
        <h3 style={{textAlign: "center"}}>{quizQuestionSpanish[state.step]}</h3>
        <p className="subtitle-quiz">Por favor haz click en una opción</p>
      </div>
      <div className="items">
        <div className="link" onClick={() => clickOption(0)}>
          <div className="select-item-quiz">
            <p className="subtitle-quiz-option">0 - Nunca</p>
            <p className="select-quiz">
              <span style={{marginLeft: "5px"}}>Elegir</span>
            </p>
          </div>
        </div>
        <div className="link" onClick={() => clickOption(1)}>
          <div className="select-item-quiz">
            <p className="subtitle-quiz-option">1 - Raras veces</p>
            <p className="select-quiz">
              <span style={{marginLeft: "5px"}}>Elegir</span>
            </p>
          </div>
        </div>
        <div className="link" onClick={() => clickOption(2)}>
          <div className="select-item-quiz">
            <p className="subtitle-quiz-option">2 - Algunas veces</p>
            <p className="select-quiz">
              <span style={{marginLeft: "5px"}}>Elegir</span>
            </p>
          </div>
        </div>
        <div className="link" onClick={() => clickOption(3)}>
          <div className="select-item-quiz">
            <p className="subtitle-quiz-option">3 - Frecuentemente</p>
            <p className="select-quiz">
              <span style={{marginLeft: "5px"}}>Elegir</span>
            </p>
          </div>
        </div>
        <div className="link" onClick={() => clickOption(4)}>
          <div className="select-item-quiz">
            <p className="subtitle-quiz-option">4 - Siempre</p>
            <p className="select-quiz">
              <span style={{marginLeft: "5px"}}>Elegir</span>
            </p>
          </div>
        </div>
      </div>
      {showButton()}
    </div>
  )
};

export default Quiz;