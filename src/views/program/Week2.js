import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Week2 = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.profile)
  }
  
  return (
    <div className="container-center">
      <h3>Semana 2</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p style={{textAlign: 'center', fontWeight: "bold"}}>Video</p>
        </div>
        <div className="systems-card">
          <p style={{fontWeight: "bold"}}>Dia 1</p>
        </div>
        <div className="systems-card">
          <p style={{fontWeight: "bold"}}>Dia 2</p>
        </div>
        <div className="systems-card">
          <p style={{fontWeight: "bold"}}>Dia 3</p>
        </div>
        <div className="systems-card">
          <p style={{fontWeight: "bold"}}>Dia 4</p>
        </div>
        <div className="systems-card">
          <p style={{fontWeight: "bold"}}>Dia 5</p>
        </div>
        <div className="systems-card">
          <p style={{fontWeight: "bold"}}>Dia 6</p>
        </div>
        <div className="systems-card">
          <p style={{fontWeight: "bold"}}>Dia 7</p>
        </div>
      </div>
    </div>
  )
};

export default Week2;