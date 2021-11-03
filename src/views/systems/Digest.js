import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../../RoutesLiterals";

const Digest = () => {
  const history = useHistory();

  const goBack = () => {
    history.push(RoutesLiterals.toolbox)
  }
  
  return (
    <div className="container-center">
      <h3>Sistema Digestivo</h3>
      <div className="systems">
        <button type="submit" onClick={goBack} className="primary-button" style={{marginBottom: "20px", width: "150px"}}>Regresar</button>
        <div className="systems-card">
          <p>La inflamación en este sistema es de los más comunes y el que mayor afecta a otros sistemas. Cuidar de tu salud digestiva, te ayudará a recuperar más rápido tu salud en general.
Cuando estés en plena crisis digestiva: prefiere <span style={{fontWeight: "bold"}}>caldos de huesos, aloe vera, glutamina y vegetales cocidos.</span> Ayudarán a la regeneración del tejido intestinal.</p>
          <p>Para favorecer tus digestiones: prueba ingiriendo algo ácido minutos antes de comer como <span style={{fontWeight: "bold"}}>agua con limón o con 1 cta de vinagre de manzana</span> (no lo hagas si sufres gastritis o reflujo gastroesofágico), <span style={{fontWeight: "bold"}}>agua con gas o betaína HCL</span> en suplemento. Enzimas digestivas en forma de suplemento o su consumo natural a través de la papaya.</p>
          <p>Para favorecer la función enzimática, evita la ingesta de líquido durante las comidas, pero no dejes de hidratarte fuera de las comidas.</p>
          <p>Cuidar tu microbiota es cuidar de ti: incorporar <span style={{fontWeight: "bold"}}>fermentados y probióticos</span> en tu alimentación es una forma de mantenerla saludable. Sin embargo, esto se debe hacer según tolerancia.</p>
          <p>Te sugiero primero hacer el programa de alimentación antiinflamatoria y una vez sientas mejoras podrás probar tolerancia. Su ingesta debe ser de a poquito (1cdta) e ir evaluando cómo te sientes. De hecho, si tienes desequilibrio en tu microbiota puede agravar síntomas, por eso ve de a poco. </p>
        </div>
      </div>
    </div>
  )
};

export default Digest;