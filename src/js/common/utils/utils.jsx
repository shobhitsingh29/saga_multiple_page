import _ from "lodash";

export const getSearchString = (nextProps) => {
  const currentURL = nextProps.location.pathname;
  const splitURL = currentURL.split("/");

  return splitURL[splitURL.length - 1];
};

export const getDataToRender = (searchString, ItemData) => {
  if (!searchString) {
    searchString = "";
  }
  searchString = _.toUpper(searchString);
  const dataToRender = [];
  _.map(ItemData, (items, index) => {
    const description = _.toUpper(ItemData[index]["description"]);
    const name = _.toUpper(ItemData[index]["name"]);
    const id = _.toUpper(ItemData[index]["id"]);
    if (description.indexOf(searchString) >= 0 || name.indexOf(searchString) >= 0 || id.indexOf(searchString) >= 0) {
      dataToRender.push(ItemData[index]);
    }
  });
  return dataToRender;
};
