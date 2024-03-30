import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: Number,
            default: 0
        },
        articlesPublished: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "ARTICLE",
            required: true,
        }],
        medicalHistory: [
            {
                type: String,
            }
        ]
    },
    { timestamps: true },
);

const User = mongoose.model("USER", userSchema);

export default User;