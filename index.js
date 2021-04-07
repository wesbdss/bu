const express = require('express')
var app = express();
const cors = require('cors')
var port = process.env.PORT || 4000
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(cors())
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req,res,next)=> {

    res.render('index')
})


app.listen(port,()=>{console.log("porta: "+port)})