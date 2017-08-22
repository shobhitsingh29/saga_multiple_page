import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";


const Search = (props) => {
    return (
        <div>
            <Link to={"/home"}>
                <div className="back-to-home-div">
                    <button className="back-to-home">HOME</button>
                </div>

            </Link>
            <form>
                <input type="text" name="focus" className="search-box" placeholder="Search" value={props.searchText}
                       onChange={props.handleSearchText}/>
                <button className="close-icon" type="reset" onClick={props.clearData}/>
                <Link to={`/search/${props.searchText}`}>
                    <input type="button" value="search" onClick={props.searchData}/>
                </Link>
            </form>
        </div>

    );
};
export default Search;