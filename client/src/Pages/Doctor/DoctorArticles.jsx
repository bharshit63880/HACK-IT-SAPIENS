import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorPageSideBar from "./DoctorPageSideBar";
import { toast } from "react-toastify";
import axios from "axios";

const DoctorArticles = () => {
    const { doctorId } = useParams();
    const serverURI = import.meta.env.VITE_SERVER_URI;

    const [articles, setArticles] = useState([]);

    const getArticlesOfDoctor = async () => {
        try {
            console.log("We are loading articles...");
            const response = await axios.get(`${serverURI}/api/v1/article/get-article-by-id/${doctorId}`);
            if (response.data.success) {
                console.log("The response we got from the api....");
                console.log(response.data);
                setArticles(response.data.articles);
                toast.success("Got articles....");
            }

        } catch (error) {
            setArticles([]);
            toast.error("Error in loading articles");
            console.log(error);
        }
    };

    useEffect(() => {
        getArticlesOfDoctor();
    }, []);

    const handleCreateButtonClick = async () => {

    };

    return <>
        <div className="d-flex flex-row">

            <DoctorPageSideBar doctorId={doctorId} />

            <div className="container">
                <div className="d-flex justify-content-end me-5 pe-5 pt-4">
                    <button className="btn btn-outline-success" onClick={handleCreateButtonClick}>
                        <span>+</span> Create
                    </button>
                </div>
                <div className="row">
                    {articles.length !== 0 ?
                        articles.map((article) => (
                            <div key={article._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <NavLink to={`/article/${article._id}`} className="text-decoration-none text-reset">
                                                {article.title}
                                            </NavLink>
                                        </h5>
                                        <p className="card-content">
                                            {article.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )) : <h2>
                            There is nothing here. Try sharing your health advices....
                        </h2>
                    }
                </div>


            </div>
        </div>
    </>;
};

export default DoctorArticles;