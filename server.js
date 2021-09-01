const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/myBlog',{useNewUrlParser:true, useUnifiedTopology:true});

app.use('/articles',articleRouter)

app.listen(5000);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date,
        description: 'test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date,
        description: 'test description 2'
    }]

    res.render("articles/index",{articles: articles})
})