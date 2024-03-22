const Product = require("../model/productmodel");
require('dotenv').config();

//SHOW THE LIST PRODUCTS
const index = (req, res, next) => {
    Product.find()
        .then((response) => {
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
const show = (req, res, next) => {
    let productID = req.body.productID
    Product.findById(productID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: "An error occured"
            })
        })
}

//ADD NEW PRODUCT
const store = (req, res, next) => {
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
        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
}

//UPDATE A PRODUCT 
const update = (req, res, next) => {
    let productID = req.body.productID

    let updatedProductData = {
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,
        rating: req.body.rating
    }

    Product.findByIdAndUpdate(productID, { $set: updatedProductData })
        .then(() => {
            res.json({
                message: 'product updated successfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
}

//DELETE PRODUCT
const destroy = (req, res, next) => {
    let productID = req.body.productID
    Product.findOneAndDelete(productID)
        .then(() => {
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

// Define your Printify API token
const PRINTIFY_API_TOKEN = process.env.PRINTIFY_API_TOKEN;

// Define the base URL for Printify API endpoints
const BASE_URL = process.env.BASE_URL;

// Function to fetch shop information
const getPrintifyProducts = async (req, res, next) => {
    try {
        // Headers including the API key for authentication
        const headers = {
            'Authorization': `Bearer ${PRINTIFY_API_TOKEN}`,
            'Content-Type': 'application/json'
        };
        // Make GET request to Printify API
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        // Send the fetched products back to the client
        res.send(data);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    index, show, store, update, destroy, getPrintifyProducts
}