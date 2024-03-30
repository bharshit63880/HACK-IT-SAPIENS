import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Footer = () => {
    return <>
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Heal App</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-body-secondary">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/about" className="nav-link p-0 text-body-secondary">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/contact" className="nav-link p-0 text-body-secondary">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/faqs" className="nav-link p-0 text-body-secondary">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">
                                    Email address
                                </label>
                                <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email address"
                                />
                                <button className="btn btn-primary" type="button">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© {new Date().getFullYear()} Heal App, All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <svg className="bi" width={24} height={24}>
                                    <use xlinkHref="#twitter" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <svg className="bi" width={24} height={24}>
                                    <use xlinkHref="#instagram" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <svg className="bi" width={24} height={24}>
                                    <use xlinkHref="#facebook" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    </>;
};

export default Footer;