import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const RetoDia5 = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false)

  const showContent = () => {
    setShowMenu(!showMenu)
  }

  const showArrow = (bool) => {
    return bool ? <span style={{marginLeft: "5px"}}>▾</span> : <span style={{marginLeft: "5px"}}>▸</span>
  }

  const goToDay4 = () => {
    history.push("/reto-dia4")
  }

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>Dia 5 - Reto Antiinflamatorio</h2>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/DglP57yG9Sg?&rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="systems-card-week week-card menu-card" onClick={() => showContent()}>
        <p style={{fontWeight: "bold", marginLeft: "5%"}}>Menú de Hoy {showArrow(showMenu)}</p>
        {showMenu ? 
          <div style={{marginLeft: "5%"}}>
            <p>Agua con limón en ayunas</p>
            <p>Desayuno: Porridge de calabaza + arándanos</p>
            <p>Almuerzo: Salmon + Brocoli + Papa/Batata</p>
            <p>Cena: Tortillas Mexicanas Anti-inflamatorias (con pollo, pico de gallo y aguacate)</p>
            <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
          </div>
          : ""
        }
      </div>
      <h2 style={{marginTop: '-5px'}}>Programa Antiinflamatorio Avanzado</h2>
      <p style={{marginBottom: '10px', color: '#00b300', fontSize: '40px'}}><strong>$120</strong></p>
      <div id="paypal-programa-avanzado" style={{textAlign: 'center', marginTop: '5px'}}></div>
      <div style={{fontSize: '14px', textAlign: 'center'}}>
        <p>Si tienes problemas para completar el pago escríbeme a:</p>
        <p style={{marginTop: '-15px'}}>carolita320@gmail.com</p>
      </div>
    </div>
  )
};

export default RetoDia5;