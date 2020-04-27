import {combineReducers} from 'redux';
import quantitativeReducer from './quantitativeReducer';

const rootReducer = combineReducers({
    quant: quantitativeReducer
});

export default rootReducer;