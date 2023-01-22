const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.static('public'));

const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@mongosetupcluster.6pmvhu8.mongodb.net/WebsiteContent/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);
// connect to our MongoDB database (our Models specify which collections)
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// function will activate once to let us know we are connected
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})