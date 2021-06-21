import { LOG_IN, LOG_IN_ERROR, FETCH_USER } from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: localStorage.getItem('token') !== null,
    user: {},
    error: null,
    loginError: null,
    userData: null
}

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOG_IN:
      return { ...state, isSignedIn: true, user: action.payload }
    case FETCH_USER:
      return { ...state, userData: action.payload}
    case LOG_IN_ERROR:
      return {...state, loginError: 'Email o Password incorrectos, intenta de nuevo.'}
    default: 
      return state
  }
}

export default AuthReducer