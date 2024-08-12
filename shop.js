// Define the Animal class
class Animal {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.totalPrice = quantity * price;
      this.updateQuantity = this.updateQuantity.bind(this); // Fix binding
    }
  
    // Update the quantity of the animal and its total price
    updateQuantity(quantity) {
      this.quantity += quantity;
      this.totalPrice = this.quantity * this.price; // Update totalPrice
    }
  }
  
  // Define the Cart class
  class Cart {
    constructor() {
      this.cartItems = [];
    }
  
    // Add an animal to the cart
    addItem(animal) {
      const alreadyInCart = this.checkIfItemsExist(animal.name);
      if (alreadyInCart) {
        alreadyInCart.updateQuantity(animal.quantity); // Use existing item to update
      } else {
        this.cartItems.push(animal);
      }
    }
  
    // Check if an animal is already in the cart
    checkIfItemsExist(name) {
      return this.cartItems.find((item) => item.name === name); // Use find instead of filter
    }
  
    // Remove an animal from the cart by name
    removeItem(name) {
      this.cartItems = this.cartItems.filter((item) => item.name !== name);
    }
  
    // Display the animals in the cart
    showShoppingCart() {
      console.log(this.cartItems);
    }
  }
  
  // Create animal instances
  const dog = new Animal("Dog", 2, 1500);
  const cat = new Animal("Cat", 3, 800);
  const parrot = new Animal("Parrot", 1, 1200);
  
  // Create a cart
  const myCart = new Cart();
  
  // Add animals to the cart
  myCart.addItem(dog);
  myCart.removeItem("Dog"); // Remove "Dog" to test functionality
  myCart.addItem(cat);
  myCart.addItem(parrot);
  
  // Show the cart items
  myCart.showShoppingCart();
  
  // Update quantity of an animal and show the cart again
  parrot.updateQuantity(7);
  myCart.showShoppingCart();
  
  // Log the cart object
  console.log(myCart);
  