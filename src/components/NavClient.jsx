import React from "react";
import "./NavClient.scss";
import { NavLink, Link } from "react-router-dom";
import Jobposted from "./Jobposted"

const NavClient = () => {
    return (
        <nav className="navbar zindex navbar-expand-lg navbar-dark p-5 sticky-top">
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-9">
                        <Link className="navbar-brand logo" to="/">
                            <span className="skill">Skill</span>
                            <span className="bridge">Bridge</span>
                        </Link>
                    </div>
                    <div className="col-3 text-end">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/developer">Devs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/postjob">Post Job</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/jobposted">Your Job</NavLink>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavClient;
