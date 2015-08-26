import { createSelector } from 'reselect';
import _ from 'lodash';

const getItems = (state) => state.items;

export const getSearchTerm = (state, props) => props.match.params;
export const getRenderingData = () => createSelector(
    [getItems, getSearchTerm],
    (items, searchString) =>
        _.filter((items) => _.toLower(`${_.toLower(items.description)}`.indexOf((searchString))) >= 0)
);
