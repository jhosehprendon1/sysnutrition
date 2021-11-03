import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Detox = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }

  return (
    <div className="container-center">
      <h3>Sistema de Detoxificación</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p>La detoxificación es la forma en que el cuerpo procesa y remueve toxinas o desechos metabólicos de nuestro organismo. Función principal del hígado, sistema linfoide, riñones y vesícula biliar.</p>
          <p>Para ayudarlo en estos procesos detox es reducir la exposición a tóxicos como alcohol, abuso de drogas, metales pesados, pesticidas, contaminantes.</p>
          <p>Infusiones o suplementos naturales como el <span style={{fontWeight: "bold"}}>diente de león y el cardo mariano</span> ayudan a estos procesos de limpieza. </p>
          <p>Igual que los vegetales de <span style={{fontWeight: "bold"}}>hojas verdes y vegetales altos en sulfuro</span> como brócoli, coliflor, ajo, cebolla, col de bruselas. </p>
        </div>
      </div>
    </div>
  )
};

export default Detox;