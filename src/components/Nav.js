import React from "react";
import SearchBox from "./Searchbox";
import "../styles/Nav.css";
import { Container } from "react-bootstrap"

function Nav({ handleSearchChange }) {
    return (
        <div>
            <Container>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <div className="navbar-collapse row justify-content-center pt-2 pb-2 bg-warning" id=" navbarnav">
                        <SearchBox handleSearchChange={handleSearchChange} />
                    </div>
                </nav>
            </Container>
        </div>
    );
}

export default Nav;