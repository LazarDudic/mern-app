import express from 'express'
const router = express.Router()
import {getPosts, createPost, updatePost } from '../controllers/postsController.js'

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)

export default router