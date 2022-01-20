const PORT = 8000
require('dotenv').config()
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

// app.use('/news')
app.get('/news', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
          'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
      };
  
      axios.request(options).then((response) => {
          res.json(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})