import "dotenv/config.js";
import User from "../models/userModel.js";
import Article from "../models/articleModel.js";


const readArticlesController = async (req, res) => {
    console.log("We are at Read article function.");
    try {
        const articles = await Article.find().populate("author");
        return res.status(200).json({
            success: true,
            message: "Successfully got the articles....",
            articles: articles
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                message: "Error getting articles....",
                error
            }
        )
    }
};

const readArticlesByIdController = async (req, res) => {
    
    try {
        const articles = await Article.find({author: req.params.doctorId}).populate("author");
        return res.status(200).json({
            success: true,
            message: "Successfully got the articles....",
            articles: articles
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                message: "Error getting articles....",
                error
            }
        )
    }
};

const createArticlesController = async (req, res) => {
    try {
        // Extracting information from req.body
        const { title, content,author } = req.body;

        // Checking if all things are given 
        if (!title) {
            return res.send({ message: "Title is required...." });
        }
        if (!content) {
            return res.send({ message: "Content is required...." });
        }
        if (!author) {
            return res.send({ message: "Author is required...." });
        }

        const article = await new Article(req.body).save();

        return res.status(201).json({
            success: true,
            message: "Successfully created article....",
            article: article,
        });
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: "Error creating articles....",
            error
        });
    }
};

const updateArticlesController = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndUpdate(id, req.body, { new: true });
        if (!article) {
            return res.status(404).json({
                success: true,
                message: "Article not found....",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully updated article....",
            article: article,
        });
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: "Error Updating articles....",
            error
        });
    }
};

const deleteArticlesController = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndDelete(id);
        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Successfully deleted article....",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error Deleting articles....",
            error
        });
    }
};



export { readArticlesController,readArticlesByIdController, createArticlesController, updateArticlesController, deleteArticlesController };