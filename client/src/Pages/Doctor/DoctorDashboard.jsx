import React from "react";
import { Link, useParams } from "react-router-dom";
import DoctorPageSideBar from "./DoctorPageSideBar";

const DoctorDashboard = () => {
    const { doctorId } = useParams();
    return <>
        <div className="d-flex flex-row">
            <DoctorPageSideBar doctorId={doctorId} />
            <div className="container">
                <h2>Welcome to the Doctor dashboard page....</h2>
            </div>
        </div>
    </>;
};

export default DoctorDashboard;