import {combineReducers} from 'redux';
import submitChallengeReducer from './submitChallengeReducer';
import uploadChallengeReducer from './uploadChallengeReducer';
import {firestoreReducer} from 'redux-firestore';
import getChallengesReducer from './getChallengesReducer';

const rootReducer = combineReducers({
    challenge: submitChallengeReducer,
    upload: uploadChallengeReducer,
    firestore: firestoreReducer,
    getChallenge: getChallengesReducer
});

export default rootReducer;