/* TAREA: Hacer un mercado */

/*
 * PRODUCTS actions:
 *
 * Types:
 *
 * Add
 * Edit
 * Delete
 * Change Status
 *
 * Payload:
 *
 * name: string
 * status: [in storage, sell]
 */

const { createStore } = require ("redux");

const PRODUCTS_ACTION_TYPES = {
    ADD_NEW: "ADD_NEW",
    ADD: "ADD",
    EDIT: "EDIT",
    DELETE: "DELETE",
    CHANGE_STATUS: "CHANGE_STATUS"
}

const PRODUCT_STATUS = {
    IN_STORAGE: "IN_STORAGE",
    SELL: "SELL"
}

const productsInitialState = [];
let id = -1;
let qty= 1;

const productsReducer = (state = productsInitialState, action) => {
    switch(action.type) { 
        case PRODUCTS_ACTION_TYPES.ADD_NEW:
            id++;
            return [
                ...state,
                {id, name: action.payload, qty, status: PRODUCT_STATUS.IN_STORAGE}
            ];
        case PRODUCTS_ACTION_TYPES.ADD:
            return state.map((product)=>{
                if (product.id === action.payload.id){
                    return {...product, qty: qty+action.payload.qty}
                }
                return product;
            })
        case PRODUCTS_ACTION_TYPES.EDIT:
            return state.map((product)=>{
                if (product.id === action.payload.id){
                    return {...product, name:action.payload.name}
                }
                return product;
            });
        case PRODUCTS_ACTION_TYPES.DELETE:
            return state.filter((product)=>product.id !==action.payload);
        case PRODUCTS_ACTION_TYPES.CHANGE_STATUS:
            return state.map((product)=>{
                if (product.id === action.payload.id && product.qty >= action.payload.qty){
                    return {...product, status: action.payload.status, qty: qty-action.payload.qty}
                }
                return product;
            })
    }
    return state;
}

const productsStore = createStore(productsReducer);
console.log(productsStore.getState())
productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD_NEW, payload: "salt"})
productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD_NEW, payload: "sugar"})
productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD_NEW, payload: "rice"})
productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD_NEW, payload: "beans"})
productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD_NEW, payload: "oil"})
productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD_NEW, payload: "soda"})
productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD_NEW, payload: "cookies"})
console.log(productsStore.getState())

productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.EDIT, payload: {id:0, name: "sal marina"}})
console.log(productsStore.getState())

productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.DELETE, payload: 5})
console.log(productsStore.getState())

productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.CHANGE_STATUS, payload: {id:4, qty:1, status: PRODUCT_STATUS.SELL}})
console.log(productsStore.getState())

productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.ADD, payload:{id:0, qty:3}})
console.log(productsStore.getState())

productsStore.dispatch({type:PRODUCTS_ACTION_TYPES.CHANGE_STATUS, payload: {id:0, qty:2, status: PRODUCT_STATUS.SELL}})
console.log(productsStore.getState())