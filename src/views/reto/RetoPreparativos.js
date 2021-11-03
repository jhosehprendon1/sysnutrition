import React from "react";
import { Link } from 'react-router-dom';

const RetoPreparativos = () => {

  return (
    <div className="container-center">
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h2 style={{fontSize: '30px'}}>Preparativos Finales para el Reto Antiinflamatorio</h2>
        <h3>¿Preparada y lista? Mañana comenzamos</h3>
      </div>
      <iframe className="reto-video" src="https://www.youtube.com/embed/X-5eRX89wac?rel=0" title="Reto Antiinflamatorio Bienvenida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div style={{textAlign: 'center', color: '#283d54'}}>
        <h3>Si no has descargado la guía o accedido a los grupos, puedes hacerlo todavía</h3>
      </div>
      <div className="reto-button-control">
        <Link to="/files/guia-reto-antiinflamatorio.pdf" target="_blank" download>
          <button type="submit" style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Descargar Plan del Reto</button>
        </Link>        
        <a href="https://chat.whatsapp.com/IHx8nIEZslRIrRvDt0Hvct"><button type="submit" style={{padding: "10px 20px", marginRight: "10px"}} className="primary-button full">Acceso al grupo de Whatsapp</button></a>        
        <a href="https://www.facebook.com/groups/615110279521790"><button type="submit" style={{padding: "10px 20px"}} className="primary-button full">Ir Grupo de Facebook</button></a>
      </div>
    </div>
  )
};

export default RetoPreparativos;
