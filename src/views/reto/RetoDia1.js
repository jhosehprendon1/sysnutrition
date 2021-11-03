import React, {useState} from "react";

const RetoDia1 = () => {
  const [showMenu, setShowMenu] = useState(false)

  const showContent = () => {
    setShowMenu(!showMenu)
  }

  const showArrow = (bool) => {
    return bool ? <span style={{marginLeft: "5px"}}>▾</span> : <span style={{marginLeft: "5px"}}>▸</span>
  }

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>Dia 1 - Reto Antiinflamatorio</h2>
        <h3 style={{marginTop: "-14px"}}>En este video vas a aprender por que la inflamación no es del todo mala y que función cumple en tu cuerpo</h3>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/NWeypwYt1SI?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="systems-card-week week-card menu-card" onClick={() => showContent()}>
        <p style={{fontWeight: "bold", marginLeft: "5%"}}>Menú de Hoy {showArrow(showMenu)}</p>
        {showMenu ? 
          <div style={{marginLeft: "5%"}}>
            <p>Agua con limón en ayunas</p>
            <p>Desayuno: Papaya + Arepa de yuca + Huevos revueltos + Rugula</p>
            <p>Almuerzo: Pollo y calabaza al horno + Chips de Kale</p>
            <p>Cena: Caldo de huesos + Ensalada de vegetales a tu gusto + Pavo o pollo</p>
            <p>Nota: Recuerda que este menú es una propuesta, pero puedes adaptarlo con alimentos que tengas en casa y que te gusten, siempre respetando las pautas de alimentación antiinflamatoria.</p>
          </div>
          : ""
        }
      </div>
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h3>Comenta en el grupo de Facebook tu progreso en el reto o cualquier duda que tengas</h3>
      </div>
      <div style={{textAlign: "center"}}>
        <a href="https://www.facebook.com/groups/615110279521790"><button type="submit" style={{padding: "10px 20px"}} className="primary-button full">Ir al grupo de Facebook</button></a>
      </div>
    </div>
  )
};

export default RetoDia1;