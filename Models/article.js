const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types
// Data Types: https://mongoosejs.com/docs/schematypes.html
const articleSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
        author: { type: String, required: true },
        body: String,
        comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
        publishDate: { type: Date, default: Date.now }, // can set defaults for properties
        hidden: Boolean,
        meta: {
          // can have properties that are objects
          votes: Number,
          favs: Number,
        },
      },
      { timestamps: true }
    );
// We make a model from our Schema and point it at the collection we want
// we can the use the model to create, read, update, and delete data in that collection
const Article = mongoose.model('articles', articleSchema)
// https://mongoosejs.com/docs/models.html
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model MyFruit is for the myfruits collection in the database.

module.exports = Article;
