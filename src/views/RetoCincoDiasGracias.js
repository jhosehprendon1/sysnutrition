
import React from "react";
import AlertCard from '../components/AlertCard';

const RetoCincoDiasGracias = () => {

  return (
    <div className="container-center">
      <AlertCard 
        title="Felicidades, te has registrado exitosamente en el reto antiinflamatorio de 5 días"
        content="Recibirás un email con la guía e instrucciones que debes seguir"
        subContent="Si no ves el email, revisa la carpeta de correo no deseados"
        extraInfo="Si sigues teniendo problemas escribeme a carolita320@gmail.com"
      />
    </div>
  )
};

export default RetoCincoDiasGracias;