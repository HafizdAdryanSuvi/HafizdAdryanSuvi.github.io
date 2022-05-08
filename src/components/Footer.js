import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-info">
                <nav className="navbar fixed-bottom navbar-dark bg-dark">
                    <div className="container-fluid" style={{marginLeft:"40rem"}}>
                        <p className="footer"><FontAwesomeIcon icon={faCopyright}/> 2022 Copyright: React.com</p>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Footer