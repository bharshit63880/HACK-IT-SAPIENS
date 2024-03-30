import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();
    const serverURI = import.meta.env.VITE_SERVER_URI;
    const [articles, setArticles] = useState([]);

    const getArticlesOfDoctor = async () => {
        try {
            console.log("We are loading articles...");
            const response = await axios.get(`${serverURI}/api/v1/article/get-articles`);
            if (response.data.success) {
                console.log("The response we got from the api....");
                console.log(response.data);
                setArticles(response.data.articles);
                toast.success("Got articles....");
            }
            else{
                toast.error(response.data.message);
                setArticles([]);
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

    return <>
        <Layout>
            <div className="container">
            <div className="row">
                    {articles.length !== 0 ?
                        articles.map((article) => (
                            <div key={article._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to={`/article/${article._id}`} className="text-decoration-none text-reset">
                                                {article.title}
                                            </Link>
                                        </h5>
                                        <p className="card-content">
                                            {article.content}
                                        </p>
                                        <button className="btn btn-outline-primary m-1">Edit</button>
                                        <button className="btn btn-outline-danger m-1" onClick={() =>{
                                            handleDeleteButtonClick(article._id);
                                        }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )) : <h2>
                            There is nothing here. Try sharing your health advices....
                        </h2>
                    }
                </div>
            </div>
        </Layout>
    </>;
};

export default Home;