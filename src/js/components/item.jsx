import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

import PropTypes from "prop-types";

const Item = (props) => {
    return (
        <Link to={`/detailsContainer/${props.listItem.id}`}>
            <li>
                <p>{props.listItem.id}</p>
                <p>{props.listItem.name}</p>
                <p>{props.listItem.description}</p>
                <img src={props.listItem.img} alt="season"/>
            </li>
        </Link>
    );
};


Item.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.any
};
export default Item;