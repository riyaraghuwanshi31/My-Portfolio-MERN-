import mongoose from "mongoose";
import validator from "validator";

const userSch = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain at least 3 characters!"],
      },
      email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide valid email!"],
      },
      
      message: {
        type: String,
        required: [true, "Message Required!"],
        minLength: [5, "Message must contain at least 5 characters!"],
      },
})


// we need a collection
export const User= mongoose.model("User",userSch);
