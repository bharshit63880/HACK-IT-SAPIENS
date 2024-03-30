import React from "react";
import { useParams } from "react-router-dom";
import DoctorPageSideBar from "./DoctorPageSideBar";

const PatientRequests = () => {
    const { doctorId } = useParams();
    return <>
        <div className="d-flex flex-row">
            <DoctorPageSideBar doctorId={doctorId} />
            <div className="container ms-4">
                <div className="d-flex w-50 justify-content-between p-2 border mb-2 mt-2">
                    <p>I want to know about...</p>
                    <div>
                        <button className="btn btn-outline-success m-1">Accept</button>
                        <button className="btn btn-outline-danger m-1">Decline</button>
                    </div>
                </div>
                <div className="d-flex w-50 justify-content-between p-2 border mb-2 mt-2">
                    <p>I want to know about...</p>
                    <div>
                        <button className="btn btn-outline-success m-1">Accept</button>
                        <button className="btn btn-outline-danger m-1">Decline</button>
                    </div>
                </div>
                <div className="d-flex w-50 justify-content-between p-2 border mb-2 mt-2">
                    <p>I want to know about...</p>
                    <div>
                        <button className="btn btn-outline-success m-1">Accept</button>
                        <button className="btn btn-outline-danger m-1">Decline</button>
                    </div>
                </div>
                <div className="d-flex w-50 justify-content-between p-2 border mb-2 mt-2">
                    <p>I want to know about...</p>
                    <div>
                        <button className="btn btn-outline-success m-1">Accept</button>
                        <button className="btn btn-outline-danger m-1">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default PatientRequests;