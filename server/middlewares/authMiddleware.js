import User from "../models/userModel.js";

const checkIfDoctorMiddleware = async (req, res, next) => {
    try {
        // Get user from database
        const user = await User.findOne({ phone: req.body.phone });

        if (user.role !== 1) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorised access to Doctor page....",
                    user: {
                        name: user.name,
                        phone: user.phone,
                        role: user.role,
                        articlePublished: user.articlePublished,
                        medicalHistory: user.medicalHistory,
                    }
                }
            );
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                message: "Some error occured....",
                error
            }
        );
    }
};

export { checkIfDoctorMiddleware };