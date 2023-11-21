const { productDb } = require('../db.js');
const { ObjectId } = require('mongodb')

const getAll = async(req, res) => {
    // TODO 
    console.log("HERE!! ", productDb)
    const products = await productDb().find({}).toArray();
    //console.log(products);
    res.send(products)
}

const getById = async(req, res) => {
    // TODO 
    try {
        const id = req.params.id;
        const found = await productDb().findOne({_id: new ObjectId(id)});
        const response = found ?? 'Product not found';
        res.send(response);
    } catch (error) {
        res.send('Invalid product id')
    }
}

module.exports = {
    getAll,
    getById
}