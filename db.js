const {MongoClient, ObjectId} = require('mongodb');
const uri = "mongodb://localhost:27017";


let productCollection;
let purchaseCollection;
module.exports.connect = async() => {
    const client = new MongoClient(uri);
    await client.connect();
    productCollection = await client.db('main').collection('products');
    purchaseCollection = await client.db('main').collection('purchases');

    // await productCollection.insertMany(baseData); // --> Load data into MongoDB (Run just one time)

}

module.exports.productDb = () => {
    return productCollection
}

module.exports.purchaseDb = () => {
    return purchaseCollection
}