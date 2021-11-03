import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals"

import '../form.css';


export default function RetoCincoDias() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push(RoutesLiterals.retoCincoDiasGracias);
    console.log(data)
  }

  return (
    <>
      <div className="reto-content-layout">
        <div className="reto-content">
          <h1>Si Tienes Problemas Digestivos, Descontrol de Peso, Fatiga, Alergias o Migrañas puede que tu Cuerpo esté en Proceso de Inflamación</h1>
          <h2 style={{marginTop: "-5px"}}>Elimina los Síntomas de Raíz con una Alimentación Antiinflamatoria</h2>
          <p>Sigue el <span style={{fontWeight: "bold"}}>Reto Antiinflamatorio</span> por 5 Dias y comenzarás a ver cambios positivos en tu cuerpo.</p>
          <div className="reto-content-card">
            <p>Recibirás una Guia en PDF y videos que contienen:</p>
            <ul>
              <li>Menú de 5 dias con desayuno, almuerzo y cena</li>
              <li>Recetas e instrucciones de preparación</li>
              <li>Lista de alimentos inflamatorios que debes evitar</li>
              <li>Lista de alimentos antiinflamatorios que puedes incluir</li>
              <li>Acceso a grupo privado de Facebook donde podrás aclarar tus dudas</li>
              <li>Videos donde aprenderás las bases de una alimentación antiinflamatoria y prácticas que te ayudarán a obtener resultados</li>
            </ul>
          </div>
        </div>
        <img style={{width: '250px'}} alt="guia-reto-desinflamatorio" src={require('../images/guia_cover.png').default} />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p style={{fontWeight: "bold", marginTop: "10px"}}>Regístrate en el Reto Gratis</p>
        <label htmlFor="name" className="full">
          <p>Nombre*</p>
          <input
            type='text'
            placeholder='Ej.: Maria Lopez'
            ref={register({ required: true })}
            name='name'
          />
          <p className={errors.name ? "error error-visible" : "error error-hidden"}>Por favor ingresa tu nombre</p>
        </label>
        <label htmlFor="email" className="full">
          <p>Email*</p>
          <input
            type='text'
            placeholder='Ej.: maria@gmail.com'
            ref={register({
              required: true,
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email address',
              },
            })}
            name='email'
          />
          <p className={errors.email ? "error error-visible" : "error error-hidden"}>Por favor ingresa un email valido</p>
        </label>
        <button type="submit" className="primary-button full">Regístrame</button>
        <p className="moto">¡Ama tu Cuerpo y Toma el Control de tu Salud! ❤️</p>
      </form>
    </>
  )
}
