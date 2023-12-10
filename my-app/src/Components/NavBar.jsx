import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h1 className="title mx-3">MUSTSEE</h1>
                </div>
            </nav>
        )
    }
}

export default NavBar;