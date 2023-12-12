const express = require('express');
const path = require ("path");

const port = 4000

// Instanciar express
const app = express();

// Rutas
const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const authRoutes = require('./src/routes/authRoutes')

// configuramos nuestro motor de vistas y su carpeta
app.set ("views","./src/views")
app.set ("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")))

app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)


app.listen(port, ()=> console.log(`Servidor ejecutando en http://localhost:${port}`));


