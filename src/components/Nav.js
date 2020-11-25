import React from "react";
import SearchBox from "./Searchbox";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
    return (
        <nav className="navbar">
            <div className="" id="">
                <SearchBox handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}

export default Nav;