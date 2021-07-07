import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Week1 = () => {
  const history = useHistory();
  const [showPlan, setShowPlan] = useState(false)
  const [showDay1, setShowDay1] = useState(false)
  const [showDay2, setShowDay2] = useState(false)
  const [showDay3, setShowDay3] = useState(false)
  const [showDay4, setShowDay4] = useState(false)
  const [showDay5, setShowDay5] = useState(false)
  const [showDay6, setShowDay6] = useState(false)
  const [showDay7, setShowDay7] = useState(false)

  const goBack = () => {
    history.push(RoutesLiterals.profile)
  }
  
  const showContent = (content) => {
    if ( content === "day1") {
      setShowDay1(!showDay1)
    }

    if ( content === "day2") {
      setShowDay2(!showDay2)
    } 

    if ( content === "day3") {
      setShowDay3(!showDay3)
    }

    if ( content === "day4") {
      setShowDay4(!showDay4)
    }

    if ( content === "day5") {
      setShowDay5(!showDay5)
    }

    if ( content === "day6") {
      setShowDay6(!showDay6)
    }

    if ( content === "day7") {
      setShowDay7(!showDay7)
    }
  }

  const showArrow = (bool) => {
    return bool ? <span style={{marginLeft: "5px"}}>▾</span> : <span style={{marginLeft: "5px"}}>▸</span>
  }

  return (
    <div className="container-week">
      <h3>Semana 1</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card-week week-card" onClick={() => showContent("day1")}>
          <p style={{fontWeight: "bold", marginLeft: "5%"}}>Eliminación {showArrow(showDay1)}</p>
          {showDay1 ? 
            <div style={{marginLeft: "5%"}}>
              <p>asdsdasdasdasd</p>
              <p>asdasdsadasdsadsad</p>
              <p>sdasdsadsad</p>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card" onClick={() => showContent("day2")}>
          <p style={{fontWeight: "bold", marginLeft: "5%"}}>Menú {showArrow(showDay2)}</p>
          {showDay2 ? 
            <div style={{marginLeft: "5%"}}>
              <p>asdsdasdasdasd</p>
              <p>asdasdsadasdsadsad</p>
              <p>sdasdsadsad</p>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card" onClick={() => showContent("day3")}>
          <p style={{fontWeight: "bold", marginLeft: "5%"}}>Tips y Consejos{showArrow(showDay3)}</p>
          {showDay3 ? 
            <div style={{marginLeft: "5%"}}>
              <p>asdsdasdasdasd</p>
              <p>asdasdsadasdsadsad</p>
              <p>sdasdsadsad</p>
            </div>
            : ""
          }
        </div>
        <div className="systems-card-week week-card" onClick={() => showContent("day4")}>
          <p style={{fontWeight: "bold", marginLeft: "5%"}}>Bonos {showArrow(showDay4)}</p>
          {showDay4 ? 
            <div style={{marginLeft: "5%"}}>
              <p>asdsdasdasdasd</p>
              <p>asdasdsadasdsadsad</p>
              <p>sdasdsadsad</p>
            </div>
            : ""
          }
        </div>
      </div>
    </div>
  )
};

export default Week1;