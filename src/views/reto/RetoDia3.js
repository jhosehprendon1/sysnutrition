import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const RetoDia3 = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false)

  const showContent = () => {
    setShowMenu(!showMenu)
  }

  const showArrow = (bool) => {
    return bool ? <span style={{marginLeft: "5px"}}>▾</span> : <span style={{marginLeft: "5px"}}>▸</span>
  }

  const goToDay2 = () => {
    history.push('/reto-dia2')
  }

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>Dia 3 - Reto Antiinflamatorio</h2>
        <h3 style={{marginTop: "-14px"}}>En este video conocerás los alimentos con mayor poder anti-inflamatorio</h3>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/l8LB0j_Xlyg?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>Bebida Anti-inflamatoria</h3>
      <iframe className="reto-video" src="https://www.youtube.com/embed/2eIEP16prRg?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>Galleta con Frutos del Bosque</h3>
      <iframe className="reto-video" src="https://www.youtube.com/embed/WNH4-LIyKN0?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="systems-card-week week-card menu-card" onClick={() => showContent()}>
        <p style={{fontWeight: "bold", marginLeft: "5%"}}>Menú de Hoy {showArrow(showMenu)}</p>
        {showMenu ? 
          <div style={{marginLeft: "5%"}}>
            <p>Agua con limón en ayunas</p>
            <p>Desayuno: Panquecas de banano, coco y espinaca</p>
            <p>Almuerzo: Pisto de verduras + arroz + huevos</p>
            <p>Cena: Acelgas salteadas + Olivas + pavo a la plancha</p>
            <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
          </div>
          : ""
        }
      </div>
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h3>Comenta en el grupo de Facebook tu progreso en el reto o cualquier duda que tengas</h3>
      </div>
      <div style={{display: "flex"}}>
        <button type="submit" onClick={goToDay2} style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Ir al Dia 2</button>
        <a href="https://www.facebook.com/groups/615110279521790"><button type="submit" style={{padding: "10px 20px"}} className="primary-button full">Comentar en el Grupo de Facebook</button></a>
      </div>
    </div>
  )
};

export default RetoDia3;