const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./dbConnection/db');
require('dotenv').config();
const authRoutes = require('./routes/auth');


connectDatabase()

app.use(express.json())
app.use(cors())

app.use('/api/auth',authRoutes)


const port = process.env.PORT | 8000
app.listen(8000,()=>{
    console.log(`server running on port ${port}`)
})