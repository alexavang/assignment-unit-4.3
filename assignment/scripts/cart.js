console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull()) {
    return false;
  } else {
    basket.push(item);
    return true;
  }
}

function listItems() {
  for (let item of basket) {
    console.log(item);
  }
}

function empty() {
  basket.length = 0;
}

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}

function removeItem(item) {
  if (basket.includes(item)) {
      const i = basket.indexOf(item);
      basket.splice(i, 1);
      return item;
  } else {
      return null;
  }
}

// Testing

console.log("Adding Items:");
addItem("Coffee");
addItem("Tea");
addItem("Water");
addItem("Apple Juice");
addItem("Energy Drink");
console.log(basket);

console.log("List of Items:");
listItems();
console.log(basket);

console.log("Emptying Items:");
empty();
console.log(basket);

console.log("List of Items (After Emptying):");
listItems();
console.log(basket);

console.log(basket.length);
console.log(maxItems);
console.log(isFull());

console.log("List of Items (Adding):");
addItem("Soju");
console.log(basket);
console.log(basket.length);

console.log("List of Items (Removing):");
removeItem("Soju")
console.log(basket);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
