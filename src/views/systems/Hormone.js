import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Hormone = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }

  return (
    <div className="container-center">
      <h3>Sistema Hormonal</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p>El desbalance hormonal puede verse expresada en síndrome premenstrual, acné o cambios de humor. </p>
          <p>Disruptores hormonales como utilizar envases de plásticos para almacenar alimentos, productos químicos, anticonceptivos orales son factores que afectan este desequilibrio.</p>
          <p>Favorece el consumo de pescados salvajes como el <span style={{fontWeight: "bold"}}>salmón, sardinas, caballa</span> ricos en vitamina D y omega 3. </p>
          <p>Suplementos como la <span style={{fontWeight: "bold"}}>ashawanda</span> ayuda a regular los niveles de cortisol y la hormona del estrés y sentir más en calma. Incluso se ha visto efecto en los niveles de testosterona.</p>
        </div>
      </div>
    </div>
  )
};

export default Hormone;