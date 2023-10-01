import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // required field
        trim: true, // remove whitespace
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, // unique field
    },
    password: {
        type: String,
        required: true,
    }
}, {
    tymestamps: true, // createAt, updateAt
})

export default mongoose.model("User", userSchema);