const mongoose = require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price:{
        type: Number
    },
    rating:{
        type: Number
    }
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema);
module.exports = Product