
import React from "react";

const PlanPayment = () => {

  return (
    <div className="container-center">
      <h2 style={{fontWeight: "bold"}}>Plan de Alimentación Antiinflamatoria de 5 Dias</h2>
      <p style={{marginTop: '20px', color: '#00b300', fontSize: '40px'}}><strong>$10</strong></p>
      <div id="paypal-button-plan" style={{textAlign: 'center', marginTop: '5px'}}></div>
      <div style={{fontSize: '14px', textAlign: 'center'}}>
        <p>Si tienes problemas para completar el pago escríbeme a:</p>
        <p style={{marginTop: '-10px'}}>carolita320@gmail.com</p>
      </div>
    </div>
  )
};

export default PlanPayment;