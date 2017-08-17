import React from "react";
const
    Details = (props) => {
    return (
        <div className="container bg-gray bg-edit">
            <li className="inline-details">
                <label >ID : </label><p id="id"> {props.itemData.id}</p>
                <br/>
                <label>NAME : </label><p id="name"> {props.itemData.name}</p>
                <br/>
                <label>DESCRIPTION : </label><p id="desc"> {props.itemData.description}</p>
                <br/>
                <img src={props.itemData.img} alt="season"/>
                <button type="button" className="btn btn-default align-top-edit" data-dismiss="modal"  onClick={props.handleEdit}>Click To Edit Details</button>
            </li>
        </div>
    );
};
export default Details;

