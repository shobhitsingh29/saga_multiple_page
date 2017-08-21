import React from "react";
import Item from "../components/item";
import _ from "lodash";
import * as stateActions from "../actions/actions.js";
import PropTypes from "prop-types";

class ItemsList extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ul className="inline-display">
                {_.map(this.props.filterData, (listItem, index) => {
                        return <Item listItem={listItem} key={index} index={index}/>;
                    }
                )}
            </ul>
        );
    }
}

export default (ItemsList);