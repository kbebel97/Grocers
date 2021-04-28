const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;


//Unique in this case does not validate input, it is used internally by mongoose for
//optimization purposes
//For that we install npm install --save mongoose-unique-validator
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  userName: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  paymentMethods: { type: Array, required: false},
  shippingAddresses: { type: Array, required: false},
  cart: {
    items: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        }
    ]
  }
});

userSchema.methods.addToCart = function(product) {
    
  const cartProductIndex = this.cart.items.findIndex( cp => {
      return cp.productId.toString() === product._id.toString();
  });

  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if(cartProductIndex >= 0){
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
  }else{
      updatedCartItems.push({
          productId: product._id, 
          quantity: newQuantity
      })    
  }

  const updatedCart = {items: updatedCartItems};

  this.cart = updatedCart;

  return this.save(); 
}

userSchema.methods.removeFromCart = function(productId){
  const updatedCartItems = this.cart.items.filter(item =>{
      return item.productId.toString() !== productId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
}

userSchema.methods.clearCart = function(){
  this.cart = {items: []};
  return this.save();
}

//Unique validator does this
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
