import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Immune = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }

  return (
    <div className="container-center">
      <h3>Sistema Autoinmune</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p>Es una condición donde el sistema inmune ataca a su mismos tejidos, cada vez más común. Como tiroiditis de hashimoto, diabetes tipo I, celiaquía...etc.</p>
          <p>La deficiencia en vitamina A está relacionada con la autoinmunidad. Una forma de ayudar es con el consumo de <span style={{fontWeight: "bold"}}>órganos o vísceras de animales de pastoreo</span> no solo son ricos en vitamina A, sino en vitaminas B y minerales como el hierro. Inclúyelos 1-2 veces por semana.</p>
        </div>
      </div>
    </div>
  )
};

export default Immune;