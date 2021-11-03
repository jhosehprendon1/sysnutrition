
import React from "react";

const RetoPayment = () => {

  return (
    <div className="container-center">
      <h2 style={{fontWeight: "bold"}}>Reto de Alimentación Anti-inflamatoria</h2>
      <p><strong><span style={{textDecoration: 'line-through', color: 'red', fontSize: "25px"}}>$80</span></strong></p>
      <p style={{marginTop: '-20px', color: '#00b300', fontSize: '40px'}}><strong>$15</strong></p>
      <div id="paypal-button-reto" style={{textAlign: 'center', marginTop: '5px'}}></div>
      <div style={{fontSize: '14px', textAlign: 'center'}}>
        <p>Si tienes problemas para completar el pago escríbeme a:</p>
        <p style={{marginTop: '-10px'}}>carolita320@gmail.com</p>
      </div>
    </div>
  )
};

export default RetoPayment;