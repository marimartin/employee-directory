import React, { Component } from "react";
import "../styles/Header.css";
import { Container } from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="header pb-2 pt-3 bg-dark text-light">
                        <h1>Employees</h1>
                        <p>Click "name" filter alphabetically or use the searchbox to find a specific employee</p>
                    </div>
                </Container>
            </div>
        )
    }
}