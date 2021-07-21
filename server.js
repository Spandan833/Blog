const express = require('express');
const mongoose = require('mongoose')
const articleRouter = require('./routes/article.js')
const Article = require('./models/article')
const methodOverride = require('method-override')


const app = express()
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true})
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

app.use('/articles',articleRouter);
app.get('/',async (req,res)=>{
    const articles = await Article.find()
    res.render('articles/index',{articles: articles});
})
app.set('views', __dirname+'/views')

app.listen(5000);