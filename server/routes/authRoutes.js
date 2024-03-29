import express from "express";
import { registerController, loginController } from "../controllers/authControllers.js";
import { checkIfDoctorMiddleware } from "../middlewares/authMiddleware.js";

// Router to access Authorisation related routes
const authRouter = express.Router();

// Routes

/**
 * @authRouter /api/v1/auth/register
 * @description Register user
 * @access public
 */
authRouter.post("/register", registerController);

/**
 * @authRouter /api/v1/auth/login
 * @description Login user
 * @access public
 */
authRouter.post("/login", loginController);

/**
 * @authRouter /api/v1/auth/is-user-doctor
 * @description Checking If user is Doctor or not
 * @access protected
 */
authRouter.post("/is-user-doctor", checkIfDoctorMiddleware, (req, res) => {
    res.status(200).json({ isSignedIn: true, isDoctor: true, message: "User is Doctor...." });
});

// Exporting Router
export default authRouter;