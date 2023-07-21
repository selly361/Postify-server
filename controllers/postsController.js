import postMessage from "../models/postMessage.js"

const getPosts = async (req, res) => {
  
  try {
  
    const posts = await postMessage.find()
    
    res.status(200).json(posts)
  
  } 
  
  catch (error) {
    
    res.status(404).json({ message: error.message })
  
  }

}

const createPost = async (req, res) => {
  
  const post = req.body
  
  const newPost = new postMessage(post)
  
  try {
  
    await newPost.save()
    
    res.status(201).json(newPost)

  } 
  
  catch (error) {
    
    res.status(409).json({ message: error.message })
  
  }

}

const updatePost = async (req, res) => {
  
  const { id } = req.params
  
  try {
    
    const updatedPost = await postMessage.findByIdAndUpdate(id, req.body, { new: true })
  
    res.status(200).json(updatedPost)
  
  } 
  
  catch (error) {
    
    res.status(409).json({ message: error.message })
  
  }

}

const likePost = async (req, res) => {
  
  const { id } = req.params
  
  try {
    
    const post = await postMessage.findById(id)
  
    post.likes += 1
  
    const updatedPost = await post.save()
  
    res.status(200).json(updatedPost)
  
  } 
  
  catch (error) {
    res.status(409).json({ message: error.message })
  }

}

const deletePost = async (req, res) => {
  
  const { id } = req.params
  
  try {
    
    await postMessage.findByIdAndRemove(id)
  
    res.status(200).json({ message: 'Post deleted successfully' })
  
  } 
  
  catch (error) {
    res.status(409).json({ message: error.message })
  }

}

export { getPosts, createPost, updatePost, likePost, deletePost }
