import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";
import { render } from "react-dom";

export default class DataArea extends Component {
    // defining state
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    heading = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "Dob", width: "10%" }
    ]

    handleSort = heading => {
        // switch between ascending and descending
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend"
            })
        } else {
            this.setState({
                order: "descend"
            })
        }

        const compareFnc = (a, b) => {
            // sorting data
            if (this.state.order === "ascend") {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }

        }
        const sortedUsers = this.state.filteredUsers.sort(compareFnc);
        this.setState({ filteredUsers: sortedUsers });
    }

    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            // console.log(JSON.stringify(Object.values(item)
            //     .join("")
            //     .toLowerCase()))
            // merge data together, then see if user input is anywhere inside
            // takes the whole user object and merges all the values together and makes them lowercase
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            // if search does not match anything in values, no user is returned
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        // if there is a match, then the user is added to the filtered list and it is displayed
        this.setState({ filteredUsers: filteredList });
    }

    componentDidMount() {
        // populates with data once component mounts
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <>
                {/* handle search inside curly braces refers to line 71, other handle search is from searchbox.js */}
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    <DataTable
                        headings={this.heading}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );
    }
}
