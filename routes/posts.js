import express from "express"
import { getPosts } from "../controllers/postsController"

const router = express.Router()


router.use("/", getPosts)



export default router