const express = require('express');
const app = express();

const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const authRoutes = require('./src/routes/authRoutes')

app.use(express.static('public'))

app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)


/*app.get("/ping", (req, res)=> res.send("pong"));*/
/*app.get("/home", (req, res)=> res.send(__dirname + "/public_html/index.html"));*/



app.listen(4000, ()=> console.log("servidor ejecutando en http://localhost:4000"));


