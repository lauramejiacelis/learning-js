import { PRODUCTS_ACTION_TYPES } from "./types";

const PRODUCT_STATUS = {
    IN_STORAGE: "IN_STORAGE",
    OUT_OF_STOCK: "OUT_OF_STOCK"
}

const initialState = [];

let id= 0;

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_ACTION_TYPES.CREATE:
            id++;
            return [...state, {id, name:action.payload.name, qty: action.payload.qty, status: PRODUCT_STATUS.IN_STORAGE}];
        case PRODUCTS_ACTION_TYPES.EDIT:
            return state.map((product)=>
                product.id === action.payload.id ? action.payload : product
            );
        case PRODUCTS_ACTION_TYPES.DELETE:
            return state.filter((product)=>product.id !==action.payload.id)
        default:
            return state;
    }
};