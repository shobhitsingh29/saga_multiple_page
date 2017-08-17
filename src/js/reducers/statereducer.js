import * as actionTypes from "../actiontypes/actionTypes";

const initialState = {
    items: [],
    edit: false,
    searchText: ""
};

export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        /*  case actionTypes.SHOW_DETAILS:
              console.log(state);
              return Object.assign({}, ...state,action.items);*/
        case actionTypes.EDIT_DETAILS:
            return Object.assign({}, ...state, {edit: true});
        case actionTypes.SHOW_DETAILS_ACTION:
            return Object.assign({}, ...state, {items: action.items});
        default:
            return Object.assign({}, state);
    }
}