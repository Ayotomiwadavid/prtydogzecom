const express = require('express');
let app = express();
let port = 5000;

app.use(express.json())

let products = [];

app.get("/", (req, res) =>{
    res.send('server is up and running on port ' + port);
})

app.post('/product', (req, res) =>{
    const product = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category
    }
    products.push(product)
    res.status(201).send();
});

app.get('/product', (req, res) =>{
    res.json(products)
});

app.listen(port, () =>{
    console.log('server is running on port ' + port);
})