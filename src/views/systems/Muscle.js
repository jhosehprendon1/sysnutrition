import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Muscle = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }

  return (
    <div className="container-center">
      <h3>Sistema Muscular y Oseo</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p>La inflamación de estas estructuras pueden dificultar el movimiento parte importante en los hábitos saludables. Por eso trataremos de mejorar el dolor para favorecer la actividad física. </p>
          <p>La <span style={{fontWeight: "bold"}}>curcuma</span> es de las especies más potentes antiinflamatorias. </p>
          <p>El <span style={{fontWeight: "bold"}}>colágeno</span> tomando en agua, gelatina sin azúcar o caldos es una buena forma de ayudar a la recuperación del tejido conectivo.</p>
          <p>La <span style={{fontWeight: "bold"}}>glucosamina sulfato</span> ayuda a la salud del cartílago, el líquido sinovial y reduce el dolor. Los masajes pueden ser una opción para reducir tensiones y dolores musculares.</p>
        </div>
      </div>
    </div>
  )
};

export default Muscle;