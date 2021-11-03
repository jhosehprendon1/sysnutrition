import React from "react";
import { Link } from 'react-router-dom';

const Bienvenida = () => {

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>¡Bienvenida! Ya casi comenzamos el Reto Antiinflamatorio</h2>
        <h3>Te invito a ver este corto video y acceder al material inicial abajo</h3>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/nv13QD6vVcA" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h3>Descarga la guía y únete a los grupos! Vas a poder publicar tus dudas y acceder al material de cada día</h3>
      </div>
      <div className="reto-button-control">
        <Link to="/files/guia-reto-antiinflamatorio.pdf" target="_blank" download>
          <button type="submit" style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Descargar Plan del Reto</button>
        </Link>
        <a href="https://chat.whatsapp.com/IHx8nIEZslRIrRvDt0Hvct"><button type="submit" style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Acceso al grupo de Whatsapp</button></a>
        <a href="https://www.facebook.com/groups/615110279521790"><button type="submit" style={{padding: "10px 20px"}} className="primary-button full">Acceso al grupo de Facebook</button></a>
      </div>
      <p style={{fontSize: "15px", textAlign: "center"}}>Nota: Si descargas en tu móvil debes buscar en carpetas de Descargas. Si tienes problemas escríbeme por el grupo de Facebook</p>
    </div>
  )
};

export default Bienvenida;