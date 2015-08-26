import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Item = (props) => (

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

Item.propTypes = {
    filterData: PropTypes.object,
};
export default Item;
