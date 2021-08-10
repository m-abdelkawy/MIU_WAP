const express = require('express');
const shoppingCartController = require('../q3_4/controllers/shoppingcartController');
const storeController = require('../q3_4/controllers/storeController');

const options={
    "caseSensitive": false,
    "strict": false
};



const router = express.Router(options);

//routing
router.get('/', storeController.getStoreProducts); //gets all products in the store

// Get (/products/id)
router.get('/:id', storeController.getStoreProductById);

//Post(/addToCart)
router.post('/addToCart', shoppingCartController.addToCart);

// Get(/products/content)
//router.get('/content', shoppingCartController.getAddedProducts);
router.get('/content', (req, res)=>{
    console.log("content");
});

module.exports = router;