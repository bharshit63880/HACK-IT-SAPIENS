import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditArticle = () => {

    const { id,title,content } = useParams();
    const serverURI = import.meta.env.VITE_SERVER_URI;
    const navigate = useNavigate();

    const [article,setArticle] = useState({
        title: title,
        content: content,
        id: id
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
            const response = await axios.post(`${serverURI}/api/v1/article/update-article/${article.id}`,article);
            if(response.data.success){
                toast.success("Updated article successfully....");
                navigate(`/articles/${response.data.article.author}`);
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

            <button type="submit" className="btn btn-outline-primary w-100">Edit</button>
        </form>
    </>;
};

export default EditArticle;