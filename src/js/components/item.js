import React from "react";
const Item = (props) => {
    return (
        <a href={`/detailsContainer/${props.listItem.id}`}>
            <li >
                <p>{props.listItem.id}</p>            
                <p>{props.listItem.name}</p>
                <p>{props.listItem.description}</p>
                <img src={props.listItem.img} alt="season"/>
            </li>
        </a>
    );
};

export default Item;