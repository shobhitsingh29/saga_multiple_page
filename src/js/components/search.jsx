import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Search = (props) => (
  <div>
    <Link to={"/home"}>
      <div className='back-to-home-div'>
        <button className='back-to-home'>HOME</button>
      </div>
    </Link>
    <form>
      <input type='text' name='focus' className='search-box' placeholder='Search' value={props.searchText}
        onChange={props.handleSearchText} required
      />
      <button className='close-icon' type='reset' onClick={props.clearData} />
      {props.redirection ? <Link to={`/search/${props.searchText}`}>
        <input type='button' value='search' onClick={props.searchData} />
      </Link> : <input type='button' value='search' onClick={props.searchData} /> }

    </form>
  </div>
);

Search.propTypes = {
  searchText: PropTypes.string,
  searchData: PropTypes.func,
  handleSearchText: PropTypes.func,
  clearData: PropTypes.func,
  redirection: PropTypes.bool
};
export default Search;
