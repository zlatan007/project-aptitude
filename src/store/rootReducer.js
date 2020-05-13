import {combineReducers} from 'redux';
import authReducers from './authReducers'
import submitChallengeReducer from './submitChallengeReducer';
import uploadChallengeReducer from './uploadChallengeReducer';
import {firestoreReducer} from 'redux-firestore';
import getChallengesReducer from './getChallengesReducer';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducers,
    challenge: submitChallengeReducer,
    upload: uploadChallengeReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    getChallenge: getChallengesReducer
});

export default rootReducer;