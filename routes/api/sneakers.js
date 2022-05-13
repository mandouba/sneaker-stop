const express = require('express');
const router = express.Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

//getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array 
router.get('/sneakers/:sneakerName', async function(req, res){
    await sneaks.getProducts(req.params.sneakerName, 10, function(err, products){
       res.json(products)
    })
})


// //Product object includes styleID where you input it in the getProductPrices function
// //getProductPrices(styleID, callback) takes in a style ID and returns sneaker info including a price map and more images of the product
router.get('/sneaker/:styleID', async function(req, res){

    sneaks.getProductPrices(req.params.styleID, function(err, product){
        console.log(product)
    })
})

// //getMostPopular(limit, callback) takes in a limit and returns an array of the current popular products curated by StockX
router.get('/trending', async function(req, res){

    sneaks.getMostPopular(10, function(err, products){
      console.log(products)
     })
})

module.exports = router;
