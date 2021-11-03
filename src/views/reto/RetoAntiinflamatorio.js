import React from "react";
import { Link } from 'react-router-dom';

const Bienvenida = () => {

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>Elimina los Síntomas de Raíz con una Alimentación Antiinflamatoria</h2>
        <h3 style={{maxWidth: '80%', margin: 'auto'}}>Si tienes problemas digestivos, descontrol de peso, fatiga, alergias o migrañas puede que tu cuerpo esté en proceso de inflamación</h3>
        <h2 style={{marginBottom: '10px'}}>Únete al Reto Antiinflamatorio</h2>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/HFp1FMMaX0U?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p style={{marginTop: '20px', marginBottom: '-5px', fontWeight: 'bold'}}>Lo que encontrarás en el Reto:</p>
      <div className="reto-content-card" style={{width: "90%", marginTop: "20px"}}>
        <ul style={{fontSize: '16px'}}>
          <li>1 Guia de Alimentación antiinflamatoria que incluye menú para los 5 días del reto. </li>
          <li>5 Videos informativos que te van a guiar en el proceso de desinflamación. </li>
          <li>Bonus con recetas deliciosas y fáciles de preparar.</li>
          <li>Acceso al grupo de Facebook del Reto donde podrás compartir dudas y comentarios en una comunidad que estará viviendo lo mismo que tú. </li>
        </ul>
      </div>
      <p style={{marginTop: "10px", marginBottom: "-5px"}}>Fecha de Inicio: 8 de Noviembre</p>
      <p>(Puedes hacerlo cuando quieras, pero en esa fecha comenzaremos a interactuar en el grupo de Facebook)</p>
      <p style={{marginBottom: '10px', color: '#00b300', fontSize: '40px'}}><strong>$15</strong></p>
      <div id="paypal-button-reto" style={{textAlign: 'center', marginTop: '5px'}}></div>
      <div style={{fontSize: '14px', textAlign: 'center'}}>
        <p>Si tienes problemas para completar el pago escríbeme a:</p>
        <p style={{marginTop: '-15px'}}>carolita320@gmail.com</p>
      </div>
    </div>
  )
};

export default Bienvenida;