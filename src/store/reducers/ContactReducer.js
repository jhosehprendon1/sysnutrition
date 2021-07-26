import { CREATE_CONTACT, REQUEST_ERROR } from '../actions/types'

const INITIAL_STATE = {
    error: '',
    data: ''
}

const contactReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_CONTACT:
      return { ...state, data: action.payload, error: '' }
    case REQUEST_ERROR:
      return {...state, error: action.payload}
    default: 
      return state
  }
}

export default contactReducer
