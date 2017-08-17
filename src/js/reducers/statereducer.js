import * as actionTypes from "../actiontypes/actionTypes";

const initialState = {
    items: [],
    edit: false,
    searchText: "abc"
};

export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        /*  case actionTypes.SHOW_DETAILS:
              console.log(state);
              return Object.assign({}, ...state,action.items);*/
        case actionTypes.SAVE_EDIT_DETAILS:
            return Object.assign({}, ...state, {edit: true});
        case actionTypes.SHOW_DETAILS_ACTION:
            return Object.assign({}, ...state, {items: action.items});
        case actionTypes.SEARCH_TEXT_ACTION:
            return Object.assign({}, ...state, {searchText: action.searchText});
         default:
            return Object.assign({}, state);
    }
}