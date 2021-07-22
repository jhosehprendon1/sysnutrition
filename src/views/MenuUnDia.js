import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals"

import '../form.css';


export default function MenuUnDia() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push(RoutesLiterals.menuUnDiaGracias);
    console.log(data)
  }

  return (
    <div className="reto-content-layout">
      <div className="reto-content">
        <h1>Si Tienes Problemas Digestivos, Descontrol de Peso, Fatiga, Alergias o Migrañas puede que tu Cuerpo esté en Proceso de Inflamación</h1>
        <h2 style={{marginTop: "-5px"}}>Elimina los Síntomas de Raíz con una Alimentación Antiinflamatoria</h2>
        <p>Descarga el Menú Antiinflamatorio de 1 Día y Toma el Control de Tu Salud</p>
        <form className="form" style={{marginTop: "60px"}} onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" style={{marginTop: "20px"}} className="primary-button full">Obtener Menú</button>
        </form>
      </div>
      <img style={{width: '290px'}} alt="guia-reto-desinflamatorio" src={require('../images/menu1dia.png').default} />
    </div>
  )
}
