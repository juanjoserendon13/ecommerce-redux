import {
    LOAD_CART_ITEMS,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/types';

import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case LOAD_CART_ITEMS:
            return {
                ...state,
                items: [...state.items]
            };
        case ADD_CART_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            };
        case REMOVE_CART_ITEM: {
            const searchItem = (elem) => elem._id === action.payload._id;
            const item = state.items.find(searchItem);
            return {
                ...state,
                items: [
                    ...state.items.filter((el) => {
                        if (el._id !== action.payload._id) {
                            return el.id;
                        }
                        return null;
                    })
                ],
                total: state.total - item.price
            };
        }
        default:
            return state;
    }
}