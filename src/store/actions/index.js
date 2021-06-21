import { LOG_IN, LOG_IN_ERROR } from './types';
import { auth } from "../../firebase";

export const logIn = (email, password) => {
  return async dispatch => {
    try {
      const {user} = await auth.signInWithEmailAndPassword(email, password)
      dispatch({ type: LOG_IN, payload: JSON.stringify(user) })
      localStorage.setItem('token', user.refreshToken);
      localStorage.setItem('user', JSON.stringify(user));
    }
    catch {
        dispatch({ type: LOG_IN_ERROR })
    }
  } 
}
