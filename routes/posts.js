import * as controllers from "../controllers/postsController.js"

import express from "express"

const router = express.Router()

router.get("/", controllers.getPosts)

router.post("/", controllers.createPost)

router.patch("/:id", controllers.updatePost)

router.patch("/likePost/:id", controllers.likePost)

router.delete("/:id", controllers.deletePost)

export default router
