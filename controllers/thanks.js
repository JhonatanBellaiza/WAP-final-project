const { productDb } = require('../db.js');
const { ObjectId } = require('mongodb')


const getPage = async(req, res) => {
    // TODO 
    try  {
        res.render('thanks')
    } catch (error) {
        res.send('Invalid product id')
    }
}



const goBackHome = async(req,res)  => {
    try  {
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.send('Invalid product id')
    }
}



module.exports = {
    getPage,
    goBackHome
}