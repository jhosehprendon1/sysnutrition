
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";
import { connect } from 'react-redux';
import { db } from "../firebase";

const Profile = ({systemsScore, user}) => {

  const history = useHistory();
  const [systemObject, setSystemObject] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    db.collection("users").doc(user.uid).get().then((res) => {
      if(res.data()) {
        if (!res.data().quizCompleted) {
          history.replace(RoutesLiterals.quiz);
        }
        setSystemObject(res.data())
      } else {
        history.replace(RoutesLiterals.quiz);
      }
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
    
    const totalScore = brainScore + digestScore + detoxScore + sugarScore + hormoScore + muscularScore + immuneScore
    const scoreArray = [brainScore, digestScore, detoxScore, sugarScore, hormoScore, muscularScore, immuneScore]

    const sendToToolbox = () => {
      history.push(RoutesLiterals.toolbox)
    }

    const goToWeek = (week) => {
      history.push(RoutesLiterals[week])
    }

    const showPlan = () => {
      if (totalScore > 15 || scoreArray.filter(el => el >= 8).length > 1) {
        return (
          <div className="quiz-results">
            <div onClick={() => goToWeek("week1")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>1</p>
            </div>
            <div onClick={() => goToWeek("week2")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>2</p>
            </div>
            <div onClick={() => goToWeek("week3")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>3</p>
            </div>
            <div onClick={() => goToWeek("week4")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>4</p>
            </div>
            <div onClick={() => goToWeek("week5")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>5</p>
            </div>
            <div onClick={() => goToWeek("week6")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>6</p>
            </div>
            <div onClick={() => goToWeek("week7")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>7</p>
            </div>
            <div onClick={() => goToWeek("week8")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>8</p>
            </div>
          </div>
        )

      } else {
        return (
          <div className="quiz-results">
            <div onClick={() => goToWeek("week1")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>1</p>
            </div>
            <div onClick={() => goToWeek("week2")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>2</p>
            </div>
            <div onClick={() => goToWeek("week3")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>3</p>
            </div>
            <div onClick={() => goToWeek("week4")} className="profile-program-card">
              <p>Semana</p>
              <p style={{fontWeight: "bold"}}>4</p>
            </div>
          </div>
        )
      }
    }
  
    return (
      <div className="container-center">
        <h3>Tu Perfil</h3>
        <div className="profile-main">
          <div className="card-total-profile card-total-profile-main" onClick={sendToToolbox} style={{cursor: "pointer"}}>
            <p>Perfil General</p>
            <p className={totalScore > 15 ? "score-severe": "score-normal"} style={{fontSize: "30px", marginTop: "-10px"}}>{totalScore} {totalScore >= 15 ? "🔥" : "😊"}</p>
          </div>
          <div className="card-total-profile">
            <p>Programa</p>
            <p style={{fontWeight: "bold"}}>{(totalScore > 15 || scoreArray.filter(el => el >= 8).length > 1) ? "8 Semanas" : "4 Semanas"}</p>
          </div>
        </div>
        {/* <div className="profile-nav-buttons">
          <button onClick={sendToToolbox} type="submit" className="primary-button" style={{marginBottom: "20px", marginTop: "-10px", padding: "0 30px"}}>Mis Sistemas</button>
          <button type="submit" className="primary-button" style={{marginBottom: "20px", marginTop: "-10px", marginLeft: "10px", padding: "0 30px"}}>Ir al Grupo de Facebook</button>
        </div> */}
        <p style={{textAlign: "center"}}>Accede al programa de cada semana</p>
        {showPlan()}
        <p style={{textAlign: "center", marginBottom: "-10px"}}>¡Ama tu Cuerpo, Toma el Control de tu Salud! ❤️</p>
      </div>
    )
  } else {
    const renderEmptyProfile = () => {
      return (
        <div className="container-center">
          <p>Cargando Información... </p>
        </div>
      )
    }
    return (
      <div>
        {renderEmptyProfile()}
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  user: state.auth.user
})

export default connect(mapStateToProps)(Profile);