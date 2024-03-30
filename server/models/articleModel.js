import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        tags: [{
            type: String,
        }],
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "USER",
            required: true,
        },
    },
    { timestamps: true },
);

const Article = mongoose.model("ARTICLE", articleSchema);

export default Article;