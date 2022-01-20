const PORT = 8000
require('dotenv').config()
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

// app.use('/news')


app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})