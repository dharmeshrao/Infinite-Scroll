const express = require('express')
const router = express.Router()
const Data = require('../model/data.model')
router.post('/',async (req,res)=>{
   const data = await Data.create(req.body)
   res.status(200).json({data})
})

router.get('/',async (req,res)=>{
    let page = +req.query.page || 1;
    let limit = +req.query.limit || 10;
    const formula = (page-1)* limit;
    const data = await Data.find().skip(formula).limit(limit).lean().exec()
    const totalPage = await Data.find().countDocuments()
    const showAll = Math.ceil(totalPage/limit)
    res.status(200).json({data,showAll})
})

module.exports = router;