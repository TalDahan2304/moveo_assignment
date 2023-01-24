const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
    pageId:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Code', codeSchema);