import * as types from "../actiontypes/actionsTypes.js";

export function showDetailsFunction() {

    return {
        type: types.SHOW_DETAILS,
        text: types.SHOW_DETAILS
    };
}
export function editDetailsFunction() {

    return {
        type: types.EDIT_DETAILS,
        text: types.EDIT_DETAILS
    };
}