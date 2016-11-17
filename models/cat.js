var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('Cat', CatSchema);