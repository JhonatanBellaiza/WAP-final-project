const express = require('express');
var ejs = require("ejs");
const baseData = require('./basedata');
const dbClient = require('./db');
const app = express();

// routes
const productRoutes = require('./routes/products')

const main = async () => {
    
    app.listen(8080,  async() => {
        console.log('Your Server is running on 80');
        await dbClient.connect();
    })
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    
    app.use('/product', productRoutes);
    
    app.use('/', (req,res) => {
        res.send('OK');
    });
}

main();
// await productCollection.insertMany(baseData); // --> Load data into MongoDB (Run just one time)
