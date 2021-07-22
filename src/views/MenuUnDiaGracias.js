
import React from "react";
import AlertCard from '../components/AlertCard';

const MenuUnDiaGracias = () => {

  return (
    <div className="container-center">
      <AlertCard 
        title="Felicidades!"
        content="Recibirás un email con acceso al menú"
        subContent="Si no ves el email, revisa la carpeta de correo no deseados"
        extraInfo="Si sigues teniendo problemas escribeme a carolita320@gmail.com"
      />
    </div>
  )
};

export default MenuUnDiaGracias;