const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req,res,next) => {
    console.log(req)
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    })
});

router.get('/:productId', (req,res,next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Handling GET requests to /products with '+id
    })
})

router.post('/:productId', (req,res,next) => {
    const id = req.params.productId;
    res.status(201).json({
        message: 'Handling POST requests to /products with '+id
    })
})

module.exports = router;