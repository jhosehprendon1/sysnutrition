import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { createContact } from '../store/actions';
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals"

import '../form.css';


const MenuUnDia = function ({createContact, error}) {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const renderSpinner = () => {
    if(loading) {
      return (
        <div style ={{marginLeft: '10px'}} className="ui active inline loader"></div>
      )
    } else {
      return null
    }
  }

  const onSubmit = (data) => {
    setLoading(true)
    createContact(data, 27, 28, history).then(() => {
      setLoading(false)
    }).catch(e => {
      setLoading(false)
    })
  }

  return (
    <>
    <img style={{width: "120px", margin: "0px 0 35px 2.5%"}} alt="logo" src={require('../images/logo2.png').default} />
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
          <p style={{marginBottom: "1px"}} className={error ? "error error-visible" : "error error-hidden"}>El Email ya ha sido registrado o...</p>
          <p className={error ? "error error-visible" : "error error-hidden"}>{error}</p>
          <button type="submit" style={{marginTop: "20px"}} className="primary-button full">Obtener Menú</button>
          {renderSpinner()}
        </form>
      </div>
      <img style={{width: '380px', boxShadow: '0 5px 50px grey'}} alt="menu-antiinflamatorio-1-dia" src={require('../images/guide-cover-1.png').default} />
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.contact.error
  }
}

export default connect(mapStateToProps, {createContact})(MenuUnDia)
