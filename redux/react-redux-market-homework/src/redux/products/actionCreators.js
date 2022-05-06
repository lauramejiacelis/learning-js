import { PRODUCTS_ACTION_TYPES } from "./types";

export const addProduct = (name, qty) =>({
    type: PRODUCTS_ACTION_TYPES.CREATE,
    payload: {name,qty}
})

export const deleteProduct = (id) =>({
    type: PRODUCTS_ACTION_TYPES.DELETE,
    payload: {id},
})

export const editProduct = (data) =>({
    type: PRODUCTS_ACTION_TYPES.EDIT,
    payload: data,
})