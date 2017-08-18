import * as types from "../actiontypes/actionTypes";

export function showDetailsFunction() {
    return {
        type: types.SHOW_DETAILS,
        text: types.SHOW_DETAILS
    };
}
export function showFilteredDetailsFunction() {
    return {
        type: types.SHOW_FILTERED_DETAILS,
        text: types.SHOW_FILTERED_DETAILS
    };
}

export function searchTextFunction(searchText) {
    return {
        type: types.SEARCH_TEXT,
        searchText:searchText
    };
}

export function editPopUpFunction(edit) {
    return {
        type: types.EDIT_POPUP_STATE,
        edit:edit
    };
}

export function upDateJsonDataFunction(id,payload) {
    return {
        type: types.UPDATED_JSON_DATA,
        id:id,
        payload:payload
    };
}