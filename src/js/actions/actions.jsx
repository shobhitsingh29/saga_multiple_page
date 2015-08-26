import * as types from '../actiontypes/actionTypes';

export function showDetailsFunction() {
    return {
        type: types.SHOW_DETAILS,
    };
}
export function showSearchedDetailsFunction(searchedData) {
    return {
        type: types.SHOW_SEARCHED_DETAILS,
        searchedData,
    };
}
export function clearSearchTextFunction() {
    return {
        type: types.CLEAR_SEARCH_TEXT,
    };
}
export function showFilteredDetailsFunction() {
    return {
        type: types.SHOW_FILTERED_DETAILS,
    };
}

export function searchTextFunction(searchText) {
    return {
        type: types.SEARCH_TEXT,
        searchText,
    };
}

export function editPopUpFunction(edit) {
    return {
        type: types.EDIT_POPUP_STATE,
        edit,
    };
}

export function upDateJsonDataFunction(id, payload) {
    return {
        type: types.UPDATED_JSON_DATA,
        id,
        payload,
    };
}
