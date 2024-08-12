class Animal {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
    calPrice(quantity) {
      return this.price * quantity;
    }
  }
  
  class ShoppingCartItem {
    constructor(animal, quantity) {
      this.animal = animal;
      this.quantity = quantity;
    }
    totalPrice() {
      return this.animal.calPrice(this.quantity);
    }
  }
  
  const dog = new Animal(0, "Dog", 1500);
  const cat = new Animal(1, "Cat", 800);
  const parrot = new Animal(2, "Parrot", 1200);
  const rabbit = new Animal(3, "Rabbit", 500);
  
  const item1 = new ShoppingCartItem(dog, 2);
  const item2 = new ShoppingCartItem(cat, 3);
  const item3 = new ShoppingCartItem(parrot, 1);
  const item4 = new ShoppingCartItem(rabbit, 4);
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
    totalItems() {
      return this.items.length;
    }
    addItem(item) {
      this.items.push(item);
    }
    displayItems() {
      this.items.forEach((it) => {
        const { animal, quantity } = it;
        console.log(
          `You have added ${quantity} ${animal.name}(s) to the cart with a total price of ${it.totalPrice()} units.`
        );
      });
    }
  
    removeItem(id) {
      const index = this.items.findIndex((it) => it.animal.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`Item with id ${id} removed.`);
      } else {
        console.log(`Item with id ${id} not found.`);
      }
    }
  }
  
  const cart = new ShoppingCart();
  
  cart.addItem(item2);
  cart.addItem(item3);
  cart.addItem(item4);
  
  cart.displayItems();
  
  cart.addItem(item1);
  console.log(cart);
  