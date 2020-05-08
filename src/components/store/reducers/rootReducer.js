import authReducers from './authReducers'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer
}) 

export default rootReducer