import React from "react";
import {Link} from "react-router-dom";
import {ButtonGroup, Dropdown, Spinner} from "react-bootstrap";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link to="/" className="navbar-brand" >Portfolio</Link>
                        <Spinner animation="border" variant="light" size="sm"/>
                            <ul className="navbar-nav m-lg-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Dropdown as={ButtonGroup} style={{color:"white"}}>
                                        <Link to="/about" className="nav-link">
                                            <p style={{color:"white"}} className="navbar-nav a.active a:focus">about me</p>
                                        </Link>

                                        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item><Link to="/gallery" className="nav-link">Gallery</Link></Dropdown.Item>
                                            <Dropdown.Item><Link to="/organization" className="nav-link">Organization</Link></Dropdown.Item>
                                            <Dropdown.Item><Link to="/experience" className="nav-link">Experience</Link></Dropdown.Item>
                                            <Dropdown.Item><Link to="/hobby" className="nav-link">Hobby</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <Link to="/skills" className="nav-link">Skills</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/educations" className="nav-link">Educations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Socials</Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar