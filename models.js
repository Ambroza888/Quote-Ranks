const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quats_ranks', {useNewUrlParser: true});

const QuateSchema = new mongoose.Schema({
  quote:{type:String,required:true,minlength:[3,"need more than 3 letters for Quotes"]},
  votes: {type:Number,default:0},
},{timestamps:true})

const AuthorSchema = new mongoose.Schema({
  name:{type:String,required:true,minlength:[3,"need more than 3 letters"]},
  quotes: [QuateSchema]
},{timestamps:true})
const Author = mongoose.model('Author',AuthorSchema);
module.exports = Author;