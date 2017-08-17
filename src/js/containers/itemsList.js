import React from "react";
import Item from "../components/item";
import _ from "lodash";

class ItemsList extends React.Component{
    constructor(props) {
        super(props);
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }
    handleDetailsClick(event){
        console.log(event.target.src);
    }
    render(){
        return (
            <ul className="inline-display">
                {_.map(this.props.items, (listItem, index) => {
                    return <Item listItem={listItem} key={index} index={index} />;
                }
                )}
            </ul>
        );
    }
}
export default ItemsList;