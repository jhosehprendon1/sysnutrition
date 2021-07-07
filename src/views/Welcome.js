
import React from "react";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";

const Welcome = () => {
  const history = useHistory();

  const sendToProfile = () => {
    history.push(RoutesLiterals.profile);
  }

  return (
    <div className="container-center container-centerx">
      <h3 style={{textAlign: "center"}}>Felicidades, Haz terminado la fase de evaluación</h3>
      <div className="quiz-content-card-total">
        <p>Ya tienes información valiosa sobre tu salud. Conociste los sistemas afectados y tu grado de inflamación.</p>
        <p>Ahora podemos trabajar en un programa de eliminación de alimentos ajustados a tus resultados e incorporar alimentos antiinflamatorios para tu sanación.</p>
        <p>Cuando hagas click en el botón "Comenzar" vas a ingresar a tu perfil personal. Ahí encontrarás el resumen de tu evaluación y el acceso al material de cada semana de tu programa.</p>
        <p>Esa será tu página principal, donde podrás ingresar a toda la información, herramientas, videos, guias e instrucciones para que puedas tomar control de tu salud.</p>
      </div>
      <button type="submit" onClick={sendToProfile} className="primary-button" style={{marginBottom: "20px", marginTop: "-5px", padding: "10px 40px"}}>Comenzar</button>
    </div>
  )
};

export default Welcome;