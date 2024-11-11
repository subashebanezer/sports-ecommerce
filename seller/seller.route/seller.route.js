const express = require('express');
const { 
    addProduct, 
    getSellerProducts, 
    deleteProduct, 
    updateProduct, 
    getSellerProductById
} = require('../seller.controller/seller.product.controller');

const router = express.Router();

// Route to add a new product (POST /seller/:sellerId/products)
router.post('/add', addProduct); 

// Route to view all products by a specific seller (GET /seller/:sellerId/products)
router.get('/products/:sellerId/:products', getSellerProducts); 

// Route to get a specific product by productId for a seller (GET /seller/:sellerId/products/:productId)
router.get('/:sellerId/products/:productId', getSellerProductById);

// Route to update a specific product (PUT /seller/:sellerId/products/:productId)
router.put('/:sellerId/products/:productId', updateProduct); 

// Route to delete a specific product (DELETE /seller/:sellerId/products/:productId)
router.delete('/:sellerId/products/:productId', deleteProduct); 

module.exports = router;
