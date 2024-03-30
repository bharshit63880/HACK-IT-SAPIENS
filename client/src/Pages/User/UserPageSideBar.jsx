import React from "react";
import { Link } from "react-router-dom";

const UserPageSideBar = ({ userId }) => {
    return <>
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
            style={{ width: 280 }}
        >
            <Link
                to={"/"}
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
                <span className="fs-4">Heal App</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link active" aria-current="page">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={`/medical-history/${userId}`} className="nav-link link-body-emphasis">
                        Medical History
                    </Link>
                </li>
                <li>
                    <Link to={`/doctor-requests/${userId}`} className="nav-link link-body-emphasis">
                        Request a doctor
                    </Link>
                </li>

            </ul>
            <hr />
            <br />

            <div className="dropdown">
                <Link
                    to={`/profile/user/${userId}`}
                    className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-circle me-2"
                    />
                    <strong>Profile</strong>
                </Link>
                <ul className="dropdown-menu text-small shadow">
                    <li>
                        <Link className="dropdown-item" to={`/profile/user/${userId}/account-settings`}>
                            Account Settings
                        </Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <Link className="dropdown-item" to={`/sign-out`}>
                            Sign out
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    </>;
};

export default UserPageSideBar;