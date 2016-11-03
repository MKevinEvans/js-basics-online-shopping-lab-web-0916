var cart = [];

  function setCart(newCart) {
    cart = newCart;
 }

 function total() {
   let t = 0

   for (var i = 0, l = cart.length; i < l; i++) {
     for (var item in cart[i]) {
       t += cart[i][item]
     }
   }

    return t
  }
 function getCart(){
   return cart;
 };

function addToCart(item){
   var price = Math.floor(Math.random() * 100);
   cart.push({[item]: price});
   console.log(item + " has been added to your cart.");
   return cart;
 };

 function viewCart(){
   var yourCart = "In your cart, you have";
   if(cart.length === 0){
     console.log("Your shopping cart is empty.")
   } else {
     for(let i = 0; i < cart.length; i++){
       var item = Object.keys(cart[i])
         yourCart += (` ${item} at $${cart[i][item]},`)
     }
   }
   console.log(yourCart.slice(0,-1) + ".")
   // return yourCart.slice(0,-1) + ".";
 };

 function removeFromCart(item){
   for ( let i = 0; i <cart.length; i++ ){
   if (cart[i].hasOwnProperty(item)){
     cart.splice(i, 1)
     return
       }
    }
     console.log("That item is not in your cart.")
 };

 function placeOrder(number){
   if(number === undefined){
   console.log("We don't have a credit card on file for you to place your order.")
   } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
     cart = []
   }
 }
