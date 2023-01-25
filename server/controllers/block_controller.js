const Code = require('../models/code_model')

const readCode=async (req,res)=>{
    block =await Code.findOne();
    res.send(block.code);
}

const getAll = async (req, res) => {
    try{
        const blockList = await Code.find({})
        res.status(200).send({
            'status': 'OK',
            'blockList': blockList
        })
    }catch(err){
        res.status(400).send({
            'status': 'fail',
            'error': err.message
        })
    }
}


module.exports = {
    readCode, getAll
}