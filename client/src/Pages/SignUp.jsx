import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const serverURI = import.meta.env.VITE_SERVER_URI;
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");

    const handleNameInputChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePhoneInputChange = (event) => {
        setUserPhone(event.target.value);
    };

    const registerUser = async () => {
        try {
            const response = await axios.post(`${serverURI}/api/v1/auth/register`, {
                name: userName,
                phone: userPhone
            });
            console.log(response.data);

            if (response.data.success) {

                toast.success("Congrats!! You are Logged in now....");
                setTimeout(() => {
                    navigate(response.data.user.role === 1 ? `/doctorDashboard/${response.data.user.id}` : `/userDashboard/${response.data.user.id}`);
                }, 2000);
            }
            else {
                toast.error(`${response.data.message}`);

                setTimeout(() => {
                    navigate("/signup");
                }, 2000);
            }
        } catch (error) {
            console.error(error);
            toast.error(`${error.message}`);

            setTimeout(() => {
                navigate("/signup");
            }, 2000);
        }
    };

    const handleSignUpFormSubmit = async (event) => {
        event.preventDefault();

        await registerUser();
    };

    return <>
        <Layout>
            <div className="container">
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={handleSignUpFormSubmit}>
                        <h1 className="h3 mb-3 pt-4 fw-normal">Please sign up</h1>
                        <div className="form-floating">
                            <input required name="name" value={userName} onChange={handleNameInputChange} type="text" className="form-control" id="floatingName" placeholder="Name" />
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating">
                            <input required name="phone" value={userPhone} onChange={handlePhoneInputChange} type="tel" className="form-control" id="floatingPhone" placeholder="+919876543210" />
                            <label htmlFor="floatingPhone">Phone</label>
                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Sign Up
                        </button>
                        <p className="mt-5 mb-3 text-body-secondary">© {new Date().getFullYear()} Heal App </p>
                    </form>
                </main>

            </div>

        </Layout>
    </>;
};

export default SignUp;