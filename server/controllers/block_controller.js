const Code = require('../models/code_model')

const readCode=async (req,res)=>{
    block =await Code.findOne();
    res.send(block.code);
}

module.exports = {
    readCode
}