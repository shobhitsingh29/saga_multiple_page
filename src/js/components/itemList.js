import React from "react";
import Item from "../components/item";
import _ from "lodash";
import * as stateActions from "../actions/actions.js";
import PropTypes from "prop-types";

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        this.state.items = this.props.items;
        console.log(this.props.filteredItems);
    }

    componentWillReceiveProps(nextProps) {
        this.state.items = nextProps.filteredItems;
        console.log(nextProps);
    }

    render() {
        return (
            <ul className="inline-display">
                {_.map(this.props.items, (listItem, index) => {
                        return <Item listItem={listItem} key={index} index={index}/>;
                    }
                )}
            </ul>
        );
    }
}

export default (ItemsList);