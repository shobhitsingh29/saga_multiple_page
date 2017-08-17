import * as actionTypes from "../actiontypes/actionTypes";

const initialState = {
    items: [],
    edit: false,
    searchText: "",
    id:""
};

export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_EDIT_DETAILS:
            return Object.assign({},state, {edit: true});
        case actionTypes.SHOW_DETAILS_ACTION:
            return Object.assign({},state, {items: action.items});
        case actionTypes.SEARCH_TEXT:
            return Object.assign({}, state, {searchText: action.searchText});
         case actionTypes.EDIT_POPUP_STATE:
            return Object.assign({}, state, {edit: action.edit});
         default:
            return Object.assign({}, state);
    }
}