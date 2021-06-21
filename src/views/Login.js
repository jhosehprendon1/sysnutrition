import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import RoutesLiterals from "../RoutesLiterals";
import { connect } from 'react-redux';
import { logIn } from '../store/actions';


import "../form.css";

const Login = ({logIn, loginError}) => {
  const { register, handleSubmit, errors } = useForm();
  const [authError, setAuthError] = useState(false);
  const history = useHistory();

  const onSubmit = async ({email, password}) => {
    setAuthError(false)
    try {
      await logIn(email, password)
      history.replace(RoutesLiterals.profile);
    } catch {
      setAuthError(true)
    }
  }

  return (
    <div className="container-center login">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="user-login full">User Login</p>
        <label htmlFor="email" className="full">
          <p>Email*</p>
          <input
            type='text'
            placeholder='Ej.: johndoe@email.com'
            ref={register({
              required: true,
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email inválido',
              },
            })}
            name='email'
          />
          <p className={errors.email ? "error error-visible" : "error error-hidden"}>Ingresa tu email</p>
        </label>
        <label htmlFor="password" className="full">
          <p>Password*</p>
          <input
            type="password"
            placeholder="Ingresa Password"
            name="password"
            ref={register({ required: true })}
          />
          <p className={errors.password ? "error error-visible" : "error error-hidden"}>Ingresa tu password</p>
        </label>
        <button type="submit" className="primary-button full">Login</button>
        <p className={loginError ? "error error-visible full" : "error error-hidden"}>{loginError} <br></br>Si lo olvidaste escribenos a carolita320@gmail.com</p>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loginError: state.auth.loginError
})

export default connect(mapStateToProps, { logIn })(Login)
