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
            <div>{this.props.filterData &&
            <ul className="inline-display">
                {_.map(this.props.filterData, (filterData, index) => {
                        return <Item filterData={filterData} key={index} index={index}/>;
                    }
                )}
            </ul>
            }
            </div>
        );
    }
}

ItemsList.propTypes = {
    filterData: PropTypes.array

};
export default (ItemsList);
