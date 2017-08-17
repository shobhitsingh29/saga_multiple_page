import * as types from "../actiontypes/actionTypes";

export function showDetailsFunction() {
    return {
        type: types.SHOW_DETAILS,
        text: types.SHOW_DETAILS
    };
}
export function searchTextFunction() {
    return {
        type: types.SEARCH_TEXT,
        text: types.SEARCH_TEXT
    };
}
export function editDetailsFunction() {

    return {
        type: types.SAVE_EDIT_DETAILS,
        text: types.SAVE_EDIT_DETAILS
    };
}