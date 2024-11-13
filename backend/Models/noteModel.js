const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://saqlainkoser:^vvrulc2q@noteapp.ht0lc.mongodb.net/?retryWrites=true&w=majority&appName=Noteapp")

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    content:String,
    isImportant:String,
    uploadedBy:String,
    date:{
        type:Date,
        default:Date.now
    }
    })

mongoose.model('Notes',noteSchema);

module.exports = mongoose.model('Notes')