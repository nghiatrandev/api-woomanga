const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/manga";

mongoose.connect(url);

const categorySchema = new mongoose.Schema({
    // id: { type: string, trim: true, require: true },
    name: { type: String, trim: true, require: true },
    query: { type: String, trim: true, require: true },
});



const Category  = mongoose.model('Category', categorySchema);

module.exports = Category;