import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

const Item = (props) => {
    return (
        <Link to={`/detailsContainer/${props.listItem.id}`}>
            <li >
                <p>{props.listItem.id}</p>            
                <p>{props.listItem.name}</p>
                <p>{props.listItem.description}</p>
                <img src={props.listItem.img} alt="season"/>
            </li>
        </Link>
    );
};

export default Item;