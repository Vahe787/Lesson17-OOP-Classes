class CoffeeShop {
  constructor(orders = []) {
    this.mount = 0;
    this.count = 0;
    this.cheapest = [];
    this.endFoodOrDrinks = [];
    this.menu = [
      { name: "Coffee", type: "drink", price: 500 },
      { name: "Coca", type: "drink", price: 350 },
      { name: "Tea", type: "drink", price: 500 },
      { name: "Whater", type: "drink", price: 450 },
      { name: "Milk", type: "drink", price: 200 },
      { name: "Stack", type: "food", price: 5500 },
      { name: "Sushi", type: "food", price: 3000 },
      { name: "Free", type: "food", price: 800 },
      { name: "Chiken", type: "food", price: 3000 },
      { name: "Pasta", type: "food", price: 3200 },
    ];
    this.orders = orders;
  }

  addOrders(order) {
    let isorder = false;
    for (let key of this.menu) {
      if (key.name === order) {
        isorder = true;
        this.orders.push(order);
        console.log(`${order} is added`);
        this.mount += key.price;
      }
    }
    if (isorder === false) {
      console.log(`${order} is currently unavailable!!!`);
    }
  }

  dueAmount() {
    if (this.count === this.orders.length) {
      return 0;
    }
    return this.mount;
  }

  fulfillOrder() {
    let a = `${this.orders[this.count]} is ready`;
    if (this.count === this.orders.length) {
      return "All orders have been fulfilled!";
    }
    this.count++;
    return a;
  }

  listOrders() {
    if (this.count === this.orders.length) {
      return this.endFoodOrDrinks;
    } else {
      return "You have anothers foods and drinks";
    }
  }

  cheapestItem() {
    let min = Infinity;
    let name;
    this.menu.forEach((el) => {
      if (el.price < min) {
        min = el.price;
        name = el.name;
      }
    });
    this.cheapest.push(name);
    return name;
  }

  drinksOnly() {
    const resDrink = this.menu.filter((el) => {
      if (el.type === "drink") {
        return el;
      }
    });
    return resDrink;
  }

  foodOnly() {
    const resFood = this.menu.filter((el) => {
      if (el.type === "food") {
        return el;
      }
    });
    return resFood;
  }
}

const coffeeshop = new CoffeeShop();
coffeeshop.addOrders("Coca");
coffeeshop.addOrders("Chiken");
coffeeshop.addOrders("Tea");
coffeeshop.addOrders("Pizza");
console.log(coffeeshop.dueAmount());
console.log(coffeeshop.fulfillOrder());
console.log(coffeeshop.fulfillOrder());
console.log(coffeeshop.fulfillOrder());
console.log(coffeeshop.fulfillOrder());
console.log(coffeeshop.listOrders());
console.log(coffeeshop.dueAmount());
console.log(coffeeshop.cheapestItem());
console.log(coffeeshop.drinksOnly());
console.log(coffeeshop.foodOnly());

console.log(coffeeshop);
