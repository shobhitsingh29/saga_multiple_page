import apiConfig from "./apiConfig";
import { join } from "path";

export const getData = () => new Promise(function (resolve, reject) {
  const url = join(apiConfig.baseUrl, apiConfig.tilesData);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const items = data.items;
      resolve(items);
    })
    .catch((error) => {
      reject(error);
    });
});

export const updateData = (id, payload) => {
  const url = join(apiConfig.baseUrl, apiConfig.tilesData);
  return fetch(`${url}/${id}`, {
    method: "put",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json()).then((data) => data);
};
