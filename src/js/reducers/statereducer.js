import * as actionTypes from "../actiontypes/actionTypes";

const initialState = {
    items: [],
    edit: false,
    searchText: "",
    id: "",
    displayItem:{},
    filteredDetail: {}
};

export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_DETAILS_ACTION:
            return Object.assign({}, state, {items: action.items});
        case actionTypes.UPDATE_DISPLAY_ITEM:
            return Object.assign({}, state, {items: action.items});
        case actionTypes.SHOW_FILTERED_DETAILS_ACTION:
            return Object.assign({}, state, {items: action.items});
        case actionTypes.SEARCH_TEXT:
            return Object.assign({}, state, {searchText: action.searchText});
        case actionTypes.UPDATED_JSON_DATA_ACTION:
            return Object.assign({}, state, {items:action.items});
        case actionTypes.EDIT_POPUP_STATE:
            return Object.assign({}, state, {edit: action.edit});
        default:
            return Object.assign({}, state);
    }
}