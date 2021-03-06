import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";
import { Container } from "react-bootstrap";

function DataTable({ headings, users, handleSort }) {
    return (
        <div>
            <Container>
                <div className="dataTable mt-5">
                    <table id="table" className="table table-striped table-hover table-condensed">
                        <thead>
                            <tr>
                                {headings.map(({ name, width }) => {
                                    return (
                                        <th className="col"
                                            key={name}
                                            style={{ width }}
                                            onClick={() => {
                                                handleSort(name.toLowerCase());
                                            }}
                                        >
                                            {name}
                                            <span className="pointer"></span>
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        {/* users taken from DataBody */}
                        <DataBody users={users} />
                    </table>
                </div>
            </Container>
        </div>
    );
}

export default DataTable;

