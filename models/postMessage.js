import { Schema, model } from "mongoose";

const postSchema = Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: {
        type: String,
        default: "https://tinyurl.com/2p9ehrer"
    },
    likes: {
        type: Number,
        default: 0
    }
    
}, { timestamps: true })


const postMessage = model("PostMessage", postSchema)

export default postMessage