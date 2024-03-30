import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    
    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
        navigate("/login");
    };

    const handleSignUpButtonClick = () => {
        navigate("/signup");
    };

    return <>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2 text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link px-2 text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link px-2 text-white">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/faqs" className="nav-link px-2 text-white">
                                FAQs
                            </Link>
                        </li>

                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Search medications..."
                            aria-label="Search"
                        />
                    </form>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2" onClick={handleLoginButtonClick}>
                            Login
                        </button>
                        <button type="button" className="btn btn-success" onClick={handleSignUpButtonClick}>
                            Sign-up
                        </button>
                    </div>
                </div>
            </div>
        </header>

    </>;
};

export default Header;