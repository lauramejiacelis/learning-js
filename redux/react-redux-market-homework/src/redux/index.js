import { createStore, combineReducers } from "redux";
import { productsReducer } from "./products";

const reducer = combineReducers({
    products: productsReducer,
})

const store = createStore(reducer);

export default store;