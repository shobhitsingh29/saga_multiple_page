import React from "react";
import Item from "./item";
import _ from "lodash";
import * as stateActions from "../actions/actions.jsx";
import PropTypes from "prop-types";

class ItemsList extends React.PureComponent {
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
