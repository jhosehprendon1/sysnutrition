import { LOG_IN, LOG_IN_ERROR, CREATE_CONTACT, REQUEST_ERROR } from './types';
import { auth } from "../../firebase";
import axios from 'axios';

export const logIn = (email, password) => {
  return async dispatch => {
    try {
      const {user} = await auth.signInWithEmailAndPassword(email, password)
      localStorage.setItem('token', user.refreshToken);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: LOG_IN, payload: JSON.stringify(user) })
    }
    catch {
        dispatch({ type: LOG_IN_ERROR })
    }
  } 
}

export const createContact = (formValues, tagId, sequenceId, history) => {
  return async dispatch => {
      const firstName = formValues.name.split(' ')[0]
      const lastName = formValues.name.split(' ')[1]
      delete formValues['name']
      const data = {
        contact: {
          ...formValues,
          firstName,
          lastName
        }
      }

      try {
        const response = await axios.post('/api/contacts', data, {
          headers: {
            'Content-type': 'application/json',
            'Api-Token': process.env.REACT_APP_API_AC_TOKEN
          }
        })
        dispatch({ type: CREATE_CONTACT, payload: response.data })

        ////// ADD TAG

        const tagData = {
          contactTag: {
            contact: response.data.contact.id,
            tag: tagId
          }
        }
        
        await axios.post('/api/contactTags', tagData, {
          headers: {
            'Content-type': 'application/json',
            'Api-Token': process.env.REACT_APP_API_AC_TOKEN
          }
        })

        ////// ADD TO SEQUENCE

        if (sequenceId) {
          const sequenceData = {
            contactAutomation: {
              contact: response.data.contact.id,
              automation: sequenceId
            }
          }
          
          await axios.post('/api/contactAutomations', sequenceData, {
            headers: {
              'Content-type': 'application/json',
              'Api-Token': process.env.REACT_APP_API_AC_TOKEN
            }
          })
        }

        history.push('/menu-un-dia/gracias')

      } catch {
        dispatch({ type: REQUEST_ERROR, payload: 'Ourrió un error, intenta de nuevo' })
      }
      
  }
}
