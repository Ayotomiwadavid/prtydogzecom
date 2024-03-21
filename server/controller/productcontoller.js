const Product = require("../model/productmodel");

//SHOW THE LIST PRODUCTS
const index = (req, res, next) =>{
    Product.find()
    .then((response) =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//SHOW SINGLE PRODUCT
const show = (req, res, next) =>{
    let productID = req.body.productID
    Product.findById(productID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "An error occured"
        })
    })
}

//ADD NEW PRODUCT
const store = (req, res, next) =>{
    let product = new Product({
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,
        rating: req.body.rating
    })
    product.save()
    .then(response => {
        res.json({
            message: "product added successfully"
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
    })
}

//UPDATE A PRODUCT 
const update = (req, res, next) =>{
    let productID = req.body.productID

    let updatedProductData = {
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,
        rating: req.body.rating
    }

    Product.findByIdAndUpdate(productID, {$set: updatedProductData})
    .then(() => {
        res.json({
            message: 'product updated successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
    })
}

//DELETE PRODUCT
const destroy = (req, res, next) => {
    let productID = req.body.productID
    Product.findOneAndDelete(productID)
    .then(() =>{
        res.json({
            message: 'product deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}