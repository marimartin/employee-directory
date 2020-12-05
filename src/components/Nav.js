import React from "react";
import SearchBox from "./Searchbox";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id=" navbarnav">
                <SearchBox handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}

export default Nav;