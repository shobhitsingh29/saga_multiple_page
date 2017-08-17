import * as actionTypes from "../actiontypes/actionTypes";

export default function stateReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.SHOW_DETAILS:
            console.log(state);
            return Object.assign({}, ...state, { });
        case actionTypes.EDIT_DETAILS:
            return Object.assign({}, ...state, { });
        default:
            return Object.assign({}, state);
    }

}