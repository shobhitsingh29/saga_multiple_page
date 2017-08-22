import React from "react";
import DetailList from "./detailList";
import EditDetail from "./editDetail";
import _ from "lodash";
import * as stateActions from "../actions/actions.jsx";
import {updateData} from "../common/api/api";

import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";


class DetailsContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            itemData: {},
            tempData: {}
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.closeButton = this.closeButton.bind(this);
        this.clearData = this.clearData.bind(this);
        this.postData = this.postData.bind(this);
    }

    handleEdit() {
        this.props.editPopUpFunction(true);

    }

    handleDataChange(args, event) {
        let value = event.target.value;
        let name = args[0]["name"];
        let newObj = {};
        newObj[name] = value;
        let newItemData = Object.assign({}, this.state.tempData, newObj);
        this.setState({
            tempData: newItemData
        });
    }

    clearData() {
        this.setState({
            tempData: this.state.itemData
        });
    }

    closeButton() {
        this.props.editPopUpFunction(false);
    }

    postData() {

        let payload = Object.assign({}, this.state.tempData);
        let id = this.state.tempData.id;
        this.props.upDateJsonDataFunction(id, payload);

    }

    saveData() {
        this.setState({
            itemData: this.state.tempData
        });
        this.postData();
    }

    componentWillMount() {
        this.props.showFilteredDetailsFunction();
    }

    componentWillReceiveProps(nextProps) {
        let currentURL = nextProps.location.pathname;
        let splitURL = currentURL.split("/");
        let searchString = splitURL[splitURL.length - 1];
        _.map(nextProps.items, (items, index) => {
            let id = nextProps.items[index]["id"];
            if (searchString === id) {
                this.setState({
                    itemData: nextProps.items[index],
                    tempData: nextProps.items[index]
                });

            }
        });

    }

    render() {
        return (
            <div>
                <Link to={"/home"}>
                    <div className="back-to-home-div">
                        <button className="back-to-home">back to home</button>
                    </div>
                </Link>

                <DetailList handleEdit={this.handleEdit} itemData={this.state.itemData}/>{

            }
                {this.props.edit &&
                <EditDetail itemData={this.state.tempData} closeButton={this.closeButton} clearData={this.clearData}
                            handleDataChange={this.handleDataChange}
                            saveData={this.saveData}/>
                }

            </div>
        );
    }
}

export default (DetailsContainer);