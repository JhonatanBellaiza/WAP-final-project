const express = require('express');
var path = require('path');
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
const baseData = require('./basedata');
const dbClient = require('./db');
const app = express();

// routes
const productRoutes = require('./routes/products')
const cartRoutes = require('./routes/cart')
const checkoutRoutes = require('./routes/checkout')
const thanksRoutes = require('./routes/thanks')
const blogRoutes = require('./routes/blog')
const shopRoutes = require('./routes/shop')

const main = async () => {
    
    app.listen(8080,  async() => {
        console.log('Your Server is running on 80');
        await dbClient.connect();
    })
    
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //EJS Engine
    app.set('view engine', 'html');
    app.engine('html', ejs.renderFile);
    
    //Imgaes
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.use('/shop', shopRoutes)
    app.use('/blog', blogRoutes)
    app.use('/thanks', thanksRoutes)
    app.use('/cart', cartRoutes)
    app.use('/checkout', checkoutRoutes)
    app.use('/', productRoutes);

}

main();
