import express from 'express'
const router = express.Router()
import {getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/postsController.js'

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/like', likePost)

export default router