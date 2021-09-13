const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/myBlog',{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex: true});
app.use(express.urlencoded({extended: false}))
app.use('/articles',articleRouter)


app.listen(5000);

app.set('view engine','ejs');

app.get('/',async (req,res)=>{
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })

    res.render("articles/index",{articles: articles})
})