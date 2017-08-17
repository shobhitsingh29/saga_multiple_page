import * as types from "../actiontypes/actionTypes";

export function showDetailsFunction() {
    return {
        type: types.SHOW_DETAILS,
        text: types.SHOW_DETAILS
    };
}

export function searchTextFunction(searchText) {
    return {
        type: types.SEARCH_TEXT,
        searchText:searchText
    };
}

export function editDetailsFunction() {

    return {
        type: types.SAVE_EDIT_DETAILS,
        text: types.SAVE_EDIT_DETAILS
    };
}