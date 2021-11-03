import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Brain = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }

  return (
    <div className="container-center">
      <h3>Sistema Cerebral</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p>La inflamación de este sistema se representa por dificultad para concentrarse, niebla mental, dolores de cabeza, problemas de humor como ansiedad y depresión.</p>
          <p>Las mejores prácticas para relajar el sistema nervioso y reducir el estrés son la <span style={{fontWeight: "bold"}}>meditación, yoga, contacto con la naturaleza y el ejercicio físico</span> de intensidad baja a media.</p>
          <p>Suplementos: como el <span style={{fontWeight: "bold"}}>Omega 3 (DHA)</span> proveniente de pescados salvajes y testeado por terceros y el <span style={{fontWeight: "bold"}}>glicinato de Magnesio.</span></p>
          <p>Sí tienes problemas con el sueño la valeriana, pasiflora, manzanilla en forma de infusiones pueden ayudar a relajarte. Igual que la lavanda como aceite esencial en aromaterapia. </p>
        </div>
      </div>
    </div>
  )
};

export default Brain;