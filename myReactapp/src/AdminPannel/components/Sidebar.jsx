import { useState } from "react";
import "../../styles/adminpannelcss/custom.css";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <ul
                className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isCollapsed ? 'toggled' : 'sidebar-expanded'}`}
                id="accordionSidebar"
            >
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Rent & <sup>Relove</sup></div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Interface</div>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                    >
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="settings">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Settings</span></Link>
                </li>


                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <a className="collapse-item" href="utilities-color.html">Colors</a>
                            <a className="collapse-item" href="utilities-border.html">Borders</a>
                            <a className="collapse-item" href="utilities-animation.html">Animations</a>
                            <a className="collapse-item" href="utilities-other.html">Other</a>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={handleSidebarToggle}></button>
                </div>
            </ul>

            <div className={`main-content ${isCollapsed ? 'content-collapsed' : 'content-expanded'}`}>

            </div>
        </div>
    );
};

export default Sidebar;
