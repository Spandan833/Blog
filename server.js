const express = require('express');
const articleRouter = require('./routes/articles')
const app = express();

app.use('/articles',articleRouter)

app.listen(5000);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'test description'
    }]
    res.render("articles/index",{articles: articles})
})