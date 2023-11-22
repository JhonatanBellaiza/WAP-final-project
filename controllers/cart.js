const { productDb } = require('../db.js');
const { ObjectId } = require('mongodb')

const addToCart = async(req,res) => {
    const item = JSON.parse(req.body.cartItem);
    let cart = JSON.parse(req.cookies['cart'] ?? '[]');
    // if(!cart) {
    //     cart = [];
    // }
    if(!findObjById(cart, item._id)) {
        cart.push(item)
    }
    res.cookie('cart', JSON.stringify(cart))
    res.status(200).redirect('/cart')
}
const getById = async(req, res) => {
    // TODO 
    try  {
        let cart = JSON.parse(req.cookies['cart'] ?? '[]');
        let totalPrice = getTotal(cart);
        res.render('cart', {cart, totalPrice})
    } catch (error) {
        res.send('Invalid product id')
    }
}

const deleteFromCart = async(req,res) => {
    console.log(req.body.cartItem)
    // const item = JSON.parse(req.body.cartItem);
    // let cart = JSON.parse(req.cookies['cart'] ?? '[]');
    // // if(!cart) {
    // //     cart = [];
    // // }
    
    // cart = cart.filter(x=>x._id !== item._id);
    // console.log(cart);
    // console.log('NEWWWWWWWWWWW LOG',cart);
    // res.cookie('cart', JSON.stringify(cart))
    res.status(200).redirect('/cart')
}

function getTotal(cart) {
    let total = 0;
    for(let item of cart) {
        total += parseInt(item.price)
    }
    return total
}

function findObjById(cart, id) {
    const found = cart.find(x => x._id === id);
    return found;
}

module.exports = {
    addToCart,
    getById,
    deleteFromCart
}