import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Mail App</a>
                    <ul className="right">
                        <li>
                            <a>Entrar com Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
