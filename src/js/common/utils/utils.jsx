import React from "react";
import _ from "lodash";
export const getSearchString = (nextProps) => {

    let currentURL = nextProps.location.pathname;
    let splitURL = currentURL.split("/");

    return splitURL[splitURL.length - 1];
};
export const getDataToRender = (searchString,ItemData) => {
    if(!searchString){
        searchString="";
    }
    searchString = searchString.toUpperCase();
    let dataToRender = [];
    _.map(ItemData, (items, index) => {
        let description = ItemData[index]["description"].toUpperCase();
        let name = ItemData[index]["name"].toUpperCase();
        let id =ItemData[index]["id"].toUpperCase();
        if (description.indexOf(searchString) >= 0 || name.indexOf(searchString) >= 0 || id.indexOf(searchString) >= 0) {
            dataToRender.push(ItemData[index]);
        }
    });
    return dataToRender;
};
