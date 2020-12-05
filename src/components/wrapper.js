import React from "react";
import "../styles/Wrapper.css";

function Wrapper({ children }) {
    return (
        <div className="wrapper">
            {children}
            {/* wraps header and main */}
        </div>
    );
}

export default Wrapper;