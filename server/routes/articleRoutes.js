import express from "express";
import { readArticlesController,readArticlesByIdController,createArticlesController ,updateArticlesController ,deleteArticlesController } from "../controllers/articleControllers.js";

// Router to access Authorisation related routes
const articleRouter = express.Router();

// Routes

/**
 * @articleRouter /api/v1/article/get-articles
 * @description Get articles 
 * @access public
 */
articleRouter.get("/get-articles", readArticlesController);

/**
 * @articleRouter /api/v1/article/get-article-by-id/:doctorId
 * @description Get articles 
 * @access public
 */
articleRouter.get("/get-article-by-id/:doctorId", readArticlesByIdController);

/**
 * @articleRouter /api/v1/article/create-article
 * @description Create articles
 * @access public
 */
articleRouter.post("/create-article", createArticlesController);

/**
 * @articleRouter /api/v1/article/update-article/:id
 * @description Update articles
 * @access public
 */
articleRouter.put("/update-article/:id", updateArticlesController);

/**
 * @articleRouter /api/v1/article/delete-article/:id
 * @description Delete articles
 * @access public
 */
articleRouter.delete("/delete-article/:id", deleteArticlesController);


// Exporting Router
export default articleRouter;