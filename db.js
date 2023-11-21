const {MongoClient, ObjectId} = require('mongodb');
const uri = "mongodb://localhost:27017";


let productCollection;

module.exports.connect = async() => {
    const client = new MongoClient(uri);
    await client.connect();
    productCollection = await client.db('main').collection('products');

}

module.exports.productDb = () => {
    return productCollection
}