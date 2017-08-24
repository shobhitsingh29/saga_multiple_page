import React from "react";
import _ from "lodash";
export const getSearchString = (nextProps) => {

    let currentURL = nextProps.location.pathname;
    let splitURL = currentURL.split("/");

    return splitURL[splitURL.length - 1];
};
export const getDataToRender = (props) => {
    let dataToRender = [];
    let searchString=getSearchString(props);
    console.log(searchString);
    if (searchString!=="") {
        _.map(props.items, (items, index) => {
            let description = props.items[index]["description"].toUpperCase();
            let name = props.items[index]["name"].toUpperCase();
            let id = props.items[index]["id"].toUpperCase();
            if (description.indexOf(searchString) >= 0 || name.indexOf(searchString) >= 0 || id.indexOf(searchString) >= 0) {
                dataToRender.push(props.items[index]);
            }
        });
    }
    return dataToRender;
};
