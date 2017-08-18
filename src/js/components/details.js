import React from "react";
import DetailList from "../components/detailList";
import EditDetail from "../components/editDetail";
import * as stateActions from "../actions/actions.js";
import {updateData} from "../common/api/api";

import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";


class DetailsContainer extends React.Component {
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

    componentDidMount() {
        this.props.showFilteredDetailsFunction();
        console.log(this.props);
        /*let currentURL = window.location.href;
        let splitURL = currentURL.split("/");
        let searchString = splitURL[splitURL.length - 1];
        let lengthOfItems = this.props.items.length;
        for (let i = 0; i < lengthOfItems; i++) {
            let id = this.props.items[i]["id"];
            if (searchString === id) {
                this.setState({
                    itemData: this.props.items[i],
                    tempData: this.props.items[i]
                });
                break;
            }
        }*/

    }
    componentWillUpdate(){

}
    render() {
        console.log(this.props);
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