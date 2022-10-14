import { ADD_ITEM, DELETE_ITEM } from "../actions/actionTypes";

const initialState = {
    numOfitems: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfitems: state.numOfitems + 1
            };

        case DELETE_ITEM:
            return {
                ...state,
                numOfitems: state.numOfitems - 1
            };

        default:
            return state;
    }
};