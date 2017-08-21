import React from "react";
import Search from "../components/search";
import ItemsList from "../components/itemList";
import utils from "../common/utils/utils";
import _ from "lodash";

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearData = this.clearData.bind(this);
    }


    componentDidMount() {
        this.props.showDetailsFunction();

    }

    componentWillReceiveProps(nextProps) {
        let pattern = /home/;
        if (pattern.test(window.location.pathname)) {
            this.setState({
                data: nextProps.items
            });

        }

        if (this.props.items !== nextProps.items) {
            this.matchSearchData(nextProps);
        }
    }

    clearData() {
        this.props.clearSearchTextFunction();
    }

    matchSearchData(props) {
        let dataToRender = [];
        let splitURL = window.location.href.split("/");
        let searchString = splitURL[splitURL.length - 1].toUpperCase();
        if (searchString !== "") {
            _.map(props.items, (items, index) => {
                let description = props.items[index]["description"].toUpperCase();
                let name = props.items[index]["name"].toUpperCase();
                let id = props.items[index]["id"].toUpperCase();
                if (description.indexOf(searchString) >= 0 || name.indexOf(searchString) >= 0 || id.indexOf(searchString) >= 0) {
                    dataToRender.push(props.items[index]);
                }
            });

        }
        this.setState({
            data: dataToRender
        });
        this.props.showSearchedDetailsFunction(dataToRender);
    }

    handleSearchText(event) {
        let value = event.target.value;
        this.props.handleSearchText(value);
    }

    searchData() {
        this.props.showDetailsFunction();

        this.matchSearchData(this.props);
    }

    render() {
        return (
            <div className="bg-detail">
                <Search clearData={this.clearData} searchText={this.props.searchText}
                        handleSearchText={this.handleSearchText} searchData={this.searchData}/>
                {this.props.items.length ?
                    <ItemsList filterData={this.state.data} searchText={this.props.searchText}/> :
                    <div className="no-result">No Result Found , Search Again</div>}
            </div>
        );
    }
}


export default (Home);