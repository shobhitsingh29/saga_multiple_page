import React from "react";

export const getData = () => {
    return new Promise(function (resolve, reject) {
        fetch("http://localhost:3000/tilesData")
            .then(response => response.json())
            .then(data => {
                let items = data.items;
                resolve(items);
            })
            .catch(error => {
                reject(error);
            });

    });
};