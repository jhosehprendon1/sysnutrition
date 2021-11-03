import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const RetoDia2 = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false)

  const showContent = () => {
    setShowMenu(!showMenu)
  }

  const showArrow = (bool) => {
    return bool ? <span style={{marginLeft: "5px"}}>▾</span> : <span style={{marginLeft: "5px"}}>▸</span>
  }

  const goToDay1 = () => {
    history.push('/reto-dia1')
  }

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>Dia 2 - Reto Antiinflamatorio</h2>
        <h3 style={{marginTop: "-14px"}}>En este video vas a aprender los 4 alimentos pro-inflamatorios que debes evitar para mejorar tu salud</h3>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/FID8G4J3vK4?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="systems-card-week week-card menu-card" onClick={() => showContent()}>
        <p style={{fontWeight: "bold", marginLeft: "5%"}}>Menú de Hoy {showArrow(showMenu)}</p>
        {showMenu ? 
          <div style={{marginLeft: "5%"}}>
            <p>Agua con limón en ayunas</p>
            <p>Desayuno: Pudín de Chía en leche de coco + Frutos rojos</p>
            <p>Almuerzo: Merluza con papas y verduras al horno</p>
            <p>Cena: Crema de Ahuyama + pavo o pechuga + Espinacas</p>
            <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
          </div>
          : ""
        }
      </div>
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h3>Comenta en el grupo de Facebook tu progreso en el reto o cualquier duda que tengas</h3>
      </div>
      <div style={{display: "flex"}}>
        <button type="submit" onClick={goToDay1} style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Ir al Dia 1</button>
        <a href="https://www.facebook.com/groups/615110279521790"><button type="submit" style={{padding: "10px 20px"}} className="primary-button full">Comentar en el Grupo de Facebook</button></a>
      </div>
    </div>
  )
};

export default RetoDia2;