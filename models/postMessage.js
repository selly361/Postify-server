import { Schema, model } from "mongoose";

const postSchema = Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
    
})


const postMessage = model("PostMessage", postSchema)

export default postMessage