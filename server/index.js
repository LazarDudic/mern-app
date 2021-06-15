import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(express.json({limit: "30mb", extended: true})) 
app.use(cors())

app.use('/posts', postRoutes)


const CONNECTION_URL = 'mongodb+srv://Lazar90:Lazar90@cluster0.0dlvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, (console.log(`Server is running om port: ${PORT}`))))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false);