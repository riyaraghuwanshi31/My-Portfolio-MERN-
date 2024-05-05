import { User } from "../models/usermsg.js";

export const sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            });
        }
        await User.create({ name, email, message });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully!",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
                errorMessage += error.errors.name.message + " ";
            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + " ";
            }

            if (error.errors.message) {
                errorMessage += error.errors.message.message + " ";
            }
            return res.status(400).json({
                success: false,
                message: errorMessage,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Unknown Error",
        });
    }
};