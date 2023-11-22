const { productDb } = require('../db.js');
const { ObjectId } = require('mongodb')

const getAll = async(req, res) => {
    // TODO 
    console.log("HERE!! ", productDb)
    const products = await productDb().find({}).toArray();
    let body = req.document
    console.log(body);
    res.render('shop', {products, body})
}

// const getById = async(req, res) => {
//     // TODO 
//     try  {
//         debugger
//         const id = req.params.id;
//         const products = await productDb().find({}).toArray();
//         const found = await productDb().findOne({_id: new ObjectId(id)});
//         const item = found ?? 'Product not found';
//         res.render('sproduct', {item, products})

//     } catch (error) {
//         res.send('Invalid product id')
//     }
// }

// const addToCart = async(req,res) => {
//     const item = JSON.parse(req.body.cartItem);
//     let cart = JSON.parse(req.cookies['cart'] ?? '[]');
//     console.log(cart);
//     // if(!cart) {
//     //     cart = [];
//     // }
//     if(!findObjById(cart, item._id)) {
//         cart.push(item)
//     }
//     res.cookie('cart', JSON.stringify(cart))
//     res.status(200).redirect('/cart')
// }

function findObjById(cart, id) {
    const found = cart.find(x => x._id === id);
    return found;
}

module.exports = {
    getAll
    // getById,
    // addToCart
}