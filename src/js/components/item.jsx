import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

import PropTypes from "prop-types";

const Item = (props) => {
    return (


        <Link to={`/detailsContainer/${props.filterData.id}`}>
            {props.filterData &&
            <li>
                <p>{props.filterData.id}</p>
                <p>{props.filterData.name}</p>
                <p>{props.filterData.description}</p>
                <img src={props.filterData.img} alt="season"/>
            </li>
            }
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