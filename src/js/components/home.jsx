import React from "react";
import Search from "./search";
import ItemsList from "./itemList";
import PropTypes from "prop-types";

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearData = this.clearData.bind(this);
        this.searchData = this.searchData.bind(this);
    }

    componentDidMount() {
        this.props.showDetailsFunction();

    }
    clearData() {
        this.props.clearSearchTextFunction();
    }
    handleSearchText(event) {
        let value = event.target.value;
        this.props.handleSearchText(value);
    }

    searchData() {
        this.props.showSearchedDetailsFunction(this.props.searchText);
    }

    render() {
        console.log(this.props);
        return (
            <div className="bg-detail">
                <Search clearData={this.clearData} searchText={this.props.searchText}
                        handleSearchText={this.handleSearchText} searchData={this.searchData}/>
                {this.props.items.length ?
                    <ItemsList filterData={this.props.filteredItems(this.props.match.params.searchString)}  searchText={this.props.searchText}/> :
                    <div className="no-result">No Result Found , Search Again</div>}
            </div>
        );
    }
}

Home.propTypes = {
    items: PropTypes.array,
    searchText: PropTypes.string
};
export default (Home);