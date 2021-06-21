
import React from "react";
import AlertCard from '../components/AlertCard';

const ProgramaPersonalizadoGracias = () => {

  return (
    <div className="container-center">
      <AlertCard 
        title="Felicidades, te has registrado exitosamente en el programa personalizado"
        content="Recibirás un email de bienvenida con instrucciones que debes seguir"
        subContent="Si no ves el email, revisa la carpeta de correo no deseados"
        extraInfo="Si sigues teniendo problemas escribeme a carolita320@gmail.com"
      />
    </div>
  )
};

export default ProgramaPersonalizadoGracias;