import  { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ContactReducer from './ContactReducer';


export default combineReducers({
    auth: AuthReducer,
    contact: ContactReducer
})