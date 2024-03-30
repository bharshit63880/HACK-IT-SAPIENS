import React from "react";
import { useParams } from "react-router-dom";
import UserPageSideBar from "./UserPageSideBar";

const UserDashboard = () => {
    const { userId } = useParams();
    return <>
        <div className="d-flex flex-row">
            <UserPageSideBar userId={userId} />
            <div className="container">
                <h2>Welcome to the User dashboard page....</h2>
            </div>
        </div>
    </>;
};

export default UserDashboard;