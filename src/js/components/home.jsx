import React from 'react';
import Search from './search';
import ItemsList from './itemList';
import PropTypes from 'prop-types';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            redirectn: false,
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearData = this.clearData.bind(this);
        this.searchData = this.searchData.bind(this);
    }

    componentDidMount() {
        this.props.showDetailsFunction();

    }

    componentWillReceiveProps(newProps) {
        if (newProps.searchText === '') {
            this.setState({
                redirectn: false,
            });
        } else {
            this.setState({
                redirectn: true,
            });

        }

    }

    clearData() {
        this.props.clearSearchTextFunction();
    }

    handleSearchText(event) {
        const value = event.target.value;
        this.props.handleSearchText(value);
    }

    searchData() {
        this.props.showSearchedDetailsFunction(this.props.searchText);
    }

    render() {
        return (
            <div className="bg-detail">
                <Search clearData={this.clearData} searchText={this.props.searchText}
                    redirection={this.state.redirectn}
                    handleSearchText={this.handleSearchText} searchData={this.searchData}
                />
                {this.props.filteredItems(this.props.match.params.searchString).length ?
                    <ItemsList filterData={this.props.filteredItems(this.props.match.params.searchString)}
                        searchText={this.props.searchText}
                    /> :
                    <div className="no-result">No Result Found , Search Again</div>}
            </div>
        );
    }
}

Home.propTypes = {
    searchText: PropTypes.string,
    filteredItems: PropTypes.func,
    showDetailsFunction: PropTypes.func,
    clearSearchTextFunction: PropTypes.func,
    showSearchedDetailsFunction: PropTypes.func,
    handleSearchText: PropTypes.func,
    match: PropTypes.object,

};
export default (Home);
