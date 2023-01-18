import {createStore, applyMiddleware,combineReducers} from 'redux';
import userReducer from '../redux/users/reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  user: userReducer
})

const middleware = [thunk];

if(process.env.NODE_ENV === 'development'){
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))
