import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const RetoDia4 = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false)

  const showContent = () => {
    setShowMenu(!showMenu)
  }

  const showArrow = (bool) => {
    return bool ? <span style={{marginLeft: "5px"}}>▾</span> : <span style={{marginLeft: "5px"}}>▸</span>
  }

  const goToDay3 = () => {
    history.push("/reto-dia3")
  }

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>Dia 4 - Reto Antiinflamatorio</h2>
        <h3 style={{marginTop: "-14px"}}>Descubre cuantas veces debes comer para ayudar a tu sistema inmune y digestivo</h3>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/_6t5joUwU5Y?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>Cómo el estrés afecta tu inflamación</h3>
      <iframe className="reto-video" src="https://www.youtube.com/embed/8hVlRQU003Q?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="systems-card-week week-card menu-card" onClick={() => showContent()}>
        <p style={{fontWeight: "bold", marginLeft: "5%"}}>Menú de Hoy {showArrow(showMenu)}</p>
        {showMenu ? 
          <div style={{marginLeft: "5%"}}>
            <p>Agua con limón en ayunas</p>
            <p>Desayuno: Omelette con champiñones y tomate cherry + Aguacate + Pan de trigo sarraceno + naranja</p>
            <p>Almuerzo: Pollo/pavo + Ensalada mixta + Bastones de yuca</p>
            <p>Cena: Sardinas a la plancha + Verduras al gusto</p>
            <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
          </div>
          : ""
        }
      </div>
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h3>Comenta en el video de Youtube tu progreso en el reto o cualquier duda que tengas</h3>
      </div>
      <div style={{display: "flex"}}>
        <button type="submit" onClick={goToDay3} style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Ir al Dia 3</button>
        <button type="submit" style={{padding: "10px 20px"}} className="primary-button full">Comentar en el video de Youtube</button>
      </div>
  </div>
  )
};

export default RetoDia4;