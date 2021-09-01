const express = require('express');
const router = express.Router();

router.get('/test',(req,res)=>{
    res.render('articles/new')
})

module.exports = router;