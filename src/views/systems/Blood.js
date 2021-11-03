import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Blood = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }

  return (
    <div className="container-center">
      <h3>Sangre Azucar/Insulina</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p>Una de las mejores formas de regular niveles de azúcar en sangre es a través de la alimentación. Con un consumo predominante de <span style={{fontWeight: "bold"}}>vegetales</span>, alimentos altos en fibra. </p>
          <p>Tener comidas principales que te satisfagan y evitar el picoteo te ayudará a regular las hormonas del apetito y los niveles de azúcar en sangre.</p>
          <p>El <span style={{fontWeight: "bold"}}>cromo</span> este mineral encontrado en suplemento se ha visto que mejora la sensibilidad a la insulina. </p>
        </div>
      </div>
    </div>
  )
};

export default Blood;