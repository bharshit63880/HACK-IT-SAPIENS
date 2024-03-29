import "dotenv/config.js";
import User from "../models/userModel.js";


const registerController = async (req, res) => {
    console.log("We are at register function.");
    console.log(req.body);
    try {
        // Extracting information from req.body
        const { name, phone } = req.body;

        // Checking if all things are given 
        if (!name) {
            return res.send({ message: "Name is required...." });
        }
        if (!phone) {
            return res.send({ message: "Phone is required...." });
        }

        // Checking if user is already registered
        const existingUser = await User.findOne({ phone });
        if (existingUser) {

            return res.status(200).json(
                {
                    success: true,
                    message: "User is already registered....",
                    user: {
                        name: existingUser.name,
                        phone: existingUser.phone,
                        role: existingUser.role,
                        articlePublished: existingUser.articlePublished,
                        medicalHistory: existingUser.medicalHistory,
                    },
                }
            )
        }



        // Saving User Details in MongoDB Database
        const user = await new User({ name, phone }).save();

        return res.status(201).json(
            {
                success: true,
                message: "User registered successfully....",
                user: {
                    name: user.name,
                    phone: user.phone,
                    role: user.role,
                    articlePublished: user.articlePublished,
                    medicalHistory: user.medicalHistory,
                },

            }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                message: "Error registering user....",
                error
            }
        )
    }
};

const loginController = async (req, res) => {
    try {

        const { name, phone } = req.body;
        if (!name || !phone) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Invalid name or phone....",
                    error,
                }
            );
        }

        // Finding User having the given email
        const user = await User.findOne({ phone });

        // If user is not found with the given email then return
        if (!user) {
            return res.status(200).json(
                {
                    success: false,
                    message: "Phone is not registered....",
                }
            );
        }

        // Passing Token to the client
        return res.status(200).json(
            {
                success: true,
                message: "Logged in Successfully....",
                user: {
                    name: user.name,
                    phone: user.phone,
                    role: user.role,
                    articlePublished: user.articlePublished,
                    medicalHistory: user.medicalHistory,
                },
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Some Error occured....",
                error,
            }
        );
    }
};



export { registerController, loginController };