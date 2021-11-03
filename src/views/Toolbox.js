
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";
import { db } from "../firebase";

const Toolbox = ({systemsScore}) => {
  const history = useHistory();
  const [systemObject, setSystemObject] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    db.collection("users").doc(user.uid).get().then((res) => {
      setSystemObject(res.data())
    })
  }, [])

  if (systemsScore.brain || systemObject) {
    let brainScore = null
    let digestScore = null
    let detoxScore = null
    let sugarScore = null
    let hormoScore = null
    let muscularScore = null
    let immuneScore = null

    if (systemObject) {
      brainScore = Object.values(systemObject.score.brain).reduce((a, b) => a + b, 0)
      digestScore = Object.values(systemObject.score.digestive).reduce((a, b) => a + b, 0)
      detoxScore = Object.values(systemObject.score.detox).reduce((a, b) => a + b, 0)
      sugarScore = Object.values(systemObject.score.blood).reduce((a, b) => a + b, 0)
      hormoScore = Object.values(systemObject.score.hormonal).reduce((a, b) => a + b, 0)
      muscularScore = Object.values(systemObject.score.muscular).reduce((a, b) => a + b, 0)
      immuneScore = Object.values(systemObject.score.autoimmune).reduce((a, b) => a + b, 0)
    } else {
      brainScore = Object.values(systemsScore.brain).reduce((a, b) => a + b, 0)
      digestScore = Object.values(systemsScore.digestive).reduce((a, b) => a + b, 0)
      detoxScore = Object.values(systemsScore.detox).reduce((a, b) => a + b, 0)
      sugarScore = Object.values(systemsScore.blood).reduce((a, b) => a + b, 0)
      hormoScore = Object.values(systemsScore.hormonal).reduce((a, b) => a + b, 0)
      muscularScore = Object.values(systemsScore.muscular).reduce((a, b) => a + b, 0)
      immuneScore = Object.values(systemsScore.autoimmune).reduce((a, b) => a + b, 0)
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

    const goToToolbox = (toolbox) => {
      history.push(RoutesLiterals[toolbox])
    }

    const goBack = () => {
      history.push(RoutesLiterals.profile)
    }
  
    return (
      <div className="container-center">
        <h3>Tu Perfil Inflamatorio</h3>
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div style={{width: "80%", margin: "auto", marginTop: "-10px"}} className="systems-card">
          <p>Tu perfil inflamatorio esta determinado por los sistemas con puntaje en rojo. <br></br>Haz click en cada sistema para acceder a los suplmentos y super alimentos que te van a ayudar a mejorar.</p>
          <p>En esta sección encontrarás ayudas antiinflamatorias que acelerarán tu proceso de recuperación, siempre y cuando sean usados de forma complementaria al estilo de vida antiinflamatorio que aprenderás en este programa.</p>
          <p>Son alimentos, prácticas y suplementos que potencian la recuperación y el buen funcionamiento de tus sistemas. </p>
          <p>Te sugiero que pruebes de una herramienta a la vez para que sientas que efecto tiene en ti y dando prioridad al sistema donde sientas que tienes mayor problema. </p>
          <p>Y en caso de dudas si tienes alguna condición específica consulta con tu médico de cabecera.</p>
        </div>
        <div className="quiz-results" style={{marginTop: "20px"}}>
          <div onClick={() => goToToolbox("brain")} className="profile-program-card" style={{width: "165px"}}>
            <p>Sistema <br></br>Cerebral</p>
            <p className={checkSeverity(brainScore)}>{brainScore}</p>
          </div>
          <div onClick={() => goToToolbox("digest")} className="profile-program-card" style={{width: "165px"}}>
            <p>Sistema <br></br>Digestivo</p>
            <p className={checkSeverity(digestScore)}>{digestScore}</p>
          </div>
          <div onClick={() => goToToolbox("detox")} className="profile-program-card" style={{width: "165px"}}>
            <p>Sistema de <br></br>Detoxificación</p>
            <p className={checkSeverity(detoxScore)}>{detoxScore}</p>
          </div>
          <div onClick={() => goToToolbox("blood")} className="profile-program-card" style={{width: "165px"}}>
            <p>Sangre Azucar/Insulina</p>
            <p className={checkSeverity(sugarScore)}>{sugarScore}</p>
          </div>
          <div onClick={() => goToToolbox("hormone")} className="profile-program-card" style={{width: "165px"}}>
            <p>Sistema <br></br>Hormonal</p>
            <p className={checkSeverity(hormoScore)}>{hormoScore}</p>
          </div>
          <div onClick={() => goToToolbox("muscle")} className="profile-program-card" style={{width: "165px"}}>
            <p>Sistema <br></br>Muscular y Oseo</p>
            <p className={checkSeverity(muscularScore)}>{muscularScore}</p>
          </div>
          <div onClick={() => goToToolbox("immune")} className="profile-program-card" style={{width: "165px"}}>
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

export default Toolbox;