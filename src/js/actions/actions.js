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
        type: types.GET_EDIT_DETAILS,
        text: types.GET_EDIT_DETAILS
    };
}
export function editPopUpFunction(edit) {
    return {
        type: types.EDIT_POPUP_STATE,
        edit:edit
    };
}