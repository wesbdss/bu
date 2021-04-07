const express = require('express')
var app = express();

var port = process.env.PORT || 4000
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req,res,next)=> {

    res.render('index')
})


app.listen(port,()=>{console.log("porta: "+port)})