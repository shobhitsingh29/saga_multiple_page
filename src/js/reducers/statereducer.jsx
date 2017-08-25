import * as actionTypes from "../actiontypes/actionTypes";

import _ from "lodash";

const initialState = {
  items: [],
  edit: false,
  searchText: "",
  filteredItems: []
};

export default function stateReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_DETAILS_ACTION:
      return _.assign({}, state, { items: action.items });

    case actionTypes.SHOW_SEARCHED_DETAILS:
      return _.assign({}, state, { filteredItems: action.searchedData });

    case actionTypes.SHOW_FILTERED_DETAILS_ACTION:
      return _.assign({}, state, { items: action.items });

    case actionTypes.SEARCH_TEXT:
      return _.assign({}, state, { searchText: action.searchText });

    case actionTypes.UPDATED_JSON_DATA_ACTION:
      return _.assign({}, state, { items: action.items });

    case actionTypes.EDIT_POPUP_STATE:
      return _.assign({}, state, { edit: action.edit });

    case actionTypes.CLEAR_SEARCH_TEXT:
      return _.assign({}, state, { searchText: "" });

    default:
      return _.assign({}, state);
  }
}
