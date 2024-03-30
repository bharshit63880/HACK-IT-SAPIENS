import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CreateArticle = () => {

    const { doctorId } = useParams();
    const serverURI = import.meta.env.VITE_SERVER_URI;
    const navigate = useNavigate();

    const [article,setArticle] = useState({
        title: "",
        content: "",
        author: doctorId
    });

    const handleChange = (event) => {
        setArticle(
            (prevArticle) => {
                return { ...prevArticle, [event.target.name]: event.target.value };
            }
        );

        console.log(article);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${serverURI}/api/v1/article/create-article`,article);
            if(response.data.success){
                toast.success("Created article successfully....");
                navigate(`/articles/${doctorId}`);
            }
        } catch (error) {
            toast.error("Error creating article....");
            console.log(error);
        }
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="articleTitle" className="form-label">Article's Name</label>
                <input type="text" name="title" value={article.title} className="form-control" id="articleTitle" onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="articleContent" className="form-label">Article's Content</label>
                <input type="text" name="content" value={article.content} className="form-control" id="articleContent" onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-outline-success w-100">Create</button>
        </form>
    </>;
};

export default CreateArticle;