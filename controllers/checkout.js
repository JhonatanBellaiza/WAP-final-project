const { productDb } = require('../db.js');
const { purchaseDb } = require('../db.js');
const nodeMailer = require('nodemailer')

const { ObjectId } = require('mongodb')

let username;
let email;
const getPage = async(req, res) => {
    // TODO 
    try  {
        let cart = JSON.parse(req.cookies['cart'] ?? '[]');
        let totalPrice = getTotal(cart);
        console.log(totalPrice);
        res.render('checkout', {cart, totalPrice})
        console.log(cart);
    } catch (error) {
        res.send('Invalid product id')
    }
}

const buyProduct = async(req,res)  => {
    username = req.body.name;
    email = req.body.email;
    try  {
        //send mail
        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'shopg8473@gmail.com',
                pass: 'zgnr fxrp ispt enkc'
            }
        });
        
        var mailOptions = {
            from: 'shopg8473@gmail.com',
            to: email,
            subject: 'GameShop - Activation code',
            text: `${username}, Thanks for your purchase. Here you have your activation code: 0392-0320-32032-1213`
        }
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error) {
                console.log(error)
            } else {
                console.console.log('Email sent: ' +info.response);
            }
        })


        let cart = JSON.parse(req.cookies['cart'] ?? '[]');
        let user = {username:req.body.name, email:req.body.email, purchase:cart}
        await purchaseDb().insertOne(user)
        res.clearCookie('cart')
        console.log("Clear cart cookie");
        res.render('thanks')
    } catch (error) {
        console.log(error);
        res.send('Invalid product id')
    }
}

const goBackHome = async(req,res)  => {
    try  {
        res.render('index')
    } catch (error) {
        console.log(error);
        res.send('Invalid product id')
    }
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
    getPage,
    buyProduct,
    goBackHome
}