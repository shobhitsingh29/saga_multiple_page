import * as actionTypes from "../actiontypes/actionTypes";

const initialState = {
    items: [],
    edit: false,
    searchText: "",
    id: "",
    filteredItems: []
};

export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_DETAILS_ACTION:
            return Object.assign({}, state, {items: action.items});
            case actionTypes.SET_FILTERED_DETAILS:
            return Object.assign({}, state, {filteredItems: action.items});
        case actionTypes.SHOW_SEARCHED_DETAILS:
            return Object.assign({}, state, {filteredItems: action.searchedData});
        case actionTypes.SHOW_FILTERED_DETAILS_ACTION:
            return Object.assign({}, state, {items: action.items});
        case actionTypes.SEARCH_TEXT:
            return Object.assign({}, state, {searchText: action.searchText});
        case actionTypes.UPDATED_JSON_DATA_ACTION:
            return Object.assign({}, state, {items:action.items});
        case actionTypes.EDIT_POPUP_STATE:
            return Object.assign({}, state, {edit: action.edit});
            case actionTypes.CLEAR_SEARCH_TEXT:
            return Object.assign({}, state, {searchText: ""});
        default:
            return Object.assign({}, state);
    }
}