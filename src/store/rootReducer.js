import {combineReducers} from 'redux';
import authReducers from './authReducers';
import {firestoreReducer} from 'redux-firestore';
import getChallengesReducer from './getChallengesReducer';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    getChallenge: getChallengesReducer
});

export default rootReducer;