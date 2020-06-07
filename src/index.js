import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, reduxFirestore, getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/firebase-config';
import firebase from 'firebase/app';
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';
import Loader from 'react-loader-spinner'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig)
    )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className=" container text-center "><Loader
  type="ThreeDots"
  color="#00BFFF"
  height={100}
  width={100}
  timeout={1000} //1 secs

/></div>;
      return children
}

ReactDOM.render(<Provider store={store}> 
  <ReactReduxFirebaseProvider {...rrfProps}> <AuthIsLoaded><App />
   </AuthIsLoaded></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));
  serviceWorker.unregister(); 