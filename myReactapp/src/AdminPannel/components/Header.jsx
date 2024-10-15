import { useState } from "react";
import "../../styles/adminpannelcss/custom.css"
const Header = () => {
    const userName = localStorage.getItem("userName");

    const [style, setStyles] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const handleSidebarToggle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyles("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyles("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }


    };
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
                onClick={handleSidebarToggle}
            >
                <i className="fa fa-bars"></i>
            </button>

            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false" >

                        <i className="fas fa-bell fa-fw"></i>

                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>

                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 className="dropdown-header">Alerts Center</h6>


                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 2, 2019</div>
                                Spending Alert: ve noticed unusually high spending for
                                your account.
                            </div>
                        </a>
                        <a
                            className="dropdown-item text-center small text-gray-500"
                            href="#"
                        >Show All Alerts</a>

                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="messagesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">

                        <i className="fas fa-envelope fa-fw"></i>

                        <span className="badge badge-danger badge-counter">7</span>
                    </a>

                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">

                        <h6 className="dropdown-header">Message Center</h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img
                                    className="rounded-circle"
                                    src="img/undraw_profile_1.svg"
                                    alt="..." />

                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">
                                    Hi there! I am wondering if you can help me with a
                                    problem Idve been having.
                                </div>
                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>

                        <a
                            className="dropdown-item text-center small text-gray-500"
                            href="#"
                        >Read More Messages</a >

                    </div>
                </li>










                <li className="nav-item dropdown no-arrow">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userName}</span>
                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="Profile" />
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                    >
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
