const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Add schema below
const lineSneaker = new Schema({
    // Set qty to 1 when new item pushed into lineItems
    qty: { type: Number, default: 1 },
    item: sneaker
  }, {
    timestamps: true
  });


























// statics are callable on the model, not an instance (document)
orderSchema.statics.getWatchList = function(sneakers) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (the user's unpaid order)
    return this.findOneAndUpdate(
        // query
        { Shoe: shoeName,
    
})

// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addItemToWatchList = async function(styleId) {
    // this keyword is bound to the cart (order doc)
    const watchList = this;
    // Check if the item already exists in the cart
    const sneakers = wishList.sneakers.find(sneakers => sneakers.styleId.equals(styleId));
    if (lineItem) {
        // It already exists, so increase the qty
        sneakers.qty += 1;
    } else {
        // Get the item from the "catalog"
        // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
        const sneakers = await mongoose.model('Sneaker').findById(styleId);
        // The qty of the new lineItem object being pushed in defaults to 1
        watchList.sneaker.push({ sneakers });
    }
  // return the save() method's promise
  return wishList.save();
}
}