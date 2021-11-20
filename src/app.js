
const express = require('express')
const app = express();
const hbs = require('hbs');
const path = require('path');
// for hosting
const port = process.env.PORT || 3000;

// public static path
const staticpath = path.join(__dirname, "../public");
// views folder path
const template_path = path.join(__dirname, "../templates/views");
// partials path 
const partials_path = path.join(__dirname, "../templates/partials");
// to run dynamically we use engines hbs ejs pug
// set the view engine
app.set('view engine', 'hbs');
// set the new path
// if change the path then set new path
app.set('views' ,template_path)

// register the partial
hbs.registerPartials(partials_path);


// one line of code for running static website
app.use(express.static(staticpath));

app.get("", (req,res)=>{
    res.render('index');
})
app.get("/about", (req,res)=>{
    res.render('about');
})
app.get("/weather", (req,res)=>{
    res.render('weather');
})
app.get("*", (req,res)=>{
    res.render('404',{
        errormsg: 'Opps! Page Not Found click go back button'
    });
})


app.listen(port , ()=>{
console.log('listen to the post 3000 ', port);
})