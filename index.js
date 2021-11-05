const express = require('express');
const router = require('./src/routes/index');
var expressLayouts = require('express-ejs-layouts');
const app = express();

//used for application settings
app.set('view engine', 'ejs');
app.set('layout','./src/views/layout')
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)
//views will be served from this directory
app.set('views', './src/views');
app.use(expressLayouts);
app.use('/', router);
//for css,js images static files
app.use(express.static('./assets'))

app.listen(3000, () => {
    console.log('Server started at 3000!!');
}); 