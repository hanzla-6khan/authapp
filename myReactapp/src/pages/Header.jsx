import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup"
import logo from "../assets/images/logo2.png";
import "../styles/header.css";

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for modal visibility
    const [showModals, setShowModals] = useState(false); // State for modal visibility

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setSticky(scrollTop > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to handle modal toggle
    const toggleModal = () => setShowModal(!showModal);
    const toggleModals = () => setShowModals(!showModals);

    return (
        <header className={`header ${isSticky ? "sticky" : ""}`}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-center header-content">
                    <div className="logo">
                        <a href="#" className="logo">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/buy-sell">Buy/Sell</Link></li>
                                <li><Link to="/rent">Rent</Link></li>
                                <li><Link to="/donate">Donate</Link></li>
                                <li><Link to="/charity-partnerships">Charity Partnerships</Link></li>
                                <li><Link to="/community">Join Our Community</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="auth-buttons">
                        <Link className="btn btn-outline-light me-2" onClick={toggleModal}>
                            Login
                        </Link>
                        <Link to="/signup" className="btn btn-light" onClick={toggleModals}>Sign Up</Link>
                    </div>
                </div>
            </nav>
            {showModal && (
                <div className="modal" style={{ display: 'block', zIndex: '1050', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <div className="modal-dialog" style={{ pointerEvents: 'auto', zIndex: '1051' }}>
                        <Login onClose={toggleModal} /> {/* Pass the toggle function as a prop */}
                    </div>
                </div>
            )}
            {showModals && (
                <div className="modal" style={{ display: 'block', zIndex: '1050', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <div className="modal-dialog" style={{ pointerEvents: 'auto', zIndex: '1051' }}>
                        <Signup onClose={toggleModals} /> {/* Pass the toggle function as a prop */}
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;
