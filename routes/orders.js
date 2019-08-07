const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched by GET'
    });
});

router.post('/', (req,res,next) => {
    console.log(req.body)
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    }
    console.log(order)
    res.status(201).json({
        message: 'Orders were fetched by POST',
        order: order
    })
});

module.exports = router;