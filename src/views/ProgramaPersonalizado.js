import React from 'react'

import '../form.css';


export default function ProgramaPersonalizado() {

  return (
    <>
      <div className="reto-content-layout">
        <div className="reto-content">
          <h1>Programa de Desinflamación Personalizado</h1>
          <h2>¡Elimina los Sintomas de Raíz!</h2>
          <p>Se lo Frustrante que se siente ir al médico una y otra vez sin ver mejoras.</p>
          <p>Yo sufrí de problemas digestivos, alergias y migrañas... Las pastillas y los tratamientos nunca me hicieron bien. Sentía que empeoraba.</p>
          <p>Pero cuando comencé una alimentación antiinflamatoria pude ver resultados significativos. Pude ver como mi cuerpo estaba más saludable y mejoraba cada día...</p>
          <p>Dejé de sentir dolores intestinales luego de comer, migrañas por las tardes y alergias cuando me levantaba por la mañana.</p>
          <p>Si sufres de algunos de estos problemas o aumento de peso, cansancio, falta de concentración, entonces necesitas seguir un programa de desinflamación personalizado.</p>
          <div className="reto-content-card">
            <p>Voy a Guiarte en el Proceso:</p>
            <ul>
              <li>Quiz de evaluación. Determina tu perfil de inflamación</li>
              <li>Programa de Eliminación personalizado. Te guío paso a paso en el proceso</li>
              <li>Programa de Alimentación. Sabroso y divertido</li>
              <li>Programa de Reintegración</li>
              <li>Acceso a grupo Facebook privado donde podré aclarar dudas de tu proceso</li>
              <li>Lista de alimentos inflamatorios que debes evitar</li>
              <li>Lista de alimentos antiinflamatorios que debes incluir</li>
              <li>Videos que te ayudarán a crear hábitos y un estilo de vida balanceado</li>
            </ul>
          </div>
        </div>
        <img style={{width: '250px'}} alt="guia-reto-desinflamatorio" src={require('../images/guia_cover.png').default} />
      </div>
      <div style={{textAlign: "center"}}>
        <h2>¡Toma el Control de tu Salud!</h2>
        <h2>Elimina los Síntomas de Raíz con el Programa de Desinflamación Personalizado</h2>
        <p><strong><span style={{textDecoration: 'line-through', color: 'red', fontSize: "25px"}}>$400</span></strong></p>
        <p style={{marginTop: '-20px', color: '#00b300', fontSize: '40px'}}><strong>$99</strong></p>
      </div>
      <div id="paypal-button-personalizado" style={{textAlign: 'center', marginTop: '5px'}}></div>
      <div style={{fontSize: '14px', textAlign: 'center'}}>
        <p>Si tienes problemas para completar el pago escríbeme a:</p>
        <p style={{marginTop: '-10px'}}>carolita320@gmail.com</p>
      </div>
    </>
  )
}
