const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
let Article = require('./Models/article.js')

const app = express()

app.use(express.static('public'));

// parse req.body for use
app.use(express.json());

// parse queries from url
app.use(express.urlencoded({extended: true}))

console.log(new Date());

const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.PASSWORD}@mongosetupcluster.6pmvhu8.mongodb.net/WebsiteContent?retryWrites=true&w=majority`

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


// make a route that accepts some info and makes a document in the collection

app.post("/create_article", (req, res) => {
    console.log(req.body);
    Article.create(req.body);
    res.send("good request")
})


app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})