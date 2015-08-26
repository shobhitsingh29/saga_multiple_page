import Home from '../components/home';
import * as stateActions from '../actions/actions';
import { connect } from 'react-redux';
import { getRenderingData } from '../common/reselect/selector';

const mapStateToProps = ({ state }) => {
    const renderingData = getRenderingData();
    return {
        items: state.items,
        searchText: state.searchText,
        filteredItems: (searchString) => renderingData(state.items, searchString),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showDetailsFunction: () => dispatch(stateActions.showDetailsFunction()),
        showSearchedDetailsFunction: (searchedData) => dispatch(stateActions.showSearchedDetailsFunction(searchedData)),
        clearSearchTextFunction: () => dispatch(stateActions.clearSearchTextFunction()),
        handleSearchText: (searchText) => dispatch(stateActions.searchTextFunction(searchText)),
    };
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
