import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/reducer';
import projectsReducer from './projects/reducer';
import {
  reduxFirestore,
  getFirestore,
  firestoreReducer,
} from 'redux-firestore';
import {
  reactReduxFirebase,
  getFirebase,
  firebaseReducer,
} from 'react-redux-firebase';
import { firebaseConfig } from '../config/fbConfig';

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  //firestore: firestoreReducer,
});

const store = createStore(
  reducer,
  composeEnhancers(
    compose(
      applyMiddleware(
        thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })
      ),
      reduxFirestore(firebaseConfig)
      // reactReduxFirebase(firebaseConfig)
    )
  )
);

export default store;
