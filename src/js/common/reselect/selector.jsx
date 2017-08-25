import { createSelector } from 'reselect';
import _ from 'lodash';

const getItems = (state) => {
    return {
        items: state.items,
    };
};

export const getSearchTerm = (state) => {
    return {
        searchText: state.searchText,
    };
};

export const getRenderingData = createSelector(
    [getItems, getSearchTerm],
    (items, searchText) => _.filter(items.items, (item) => {

        if (item.description) {
            return item.description.toLowerCase().search(searchText.searchText) !== -1;

        }

    }));

