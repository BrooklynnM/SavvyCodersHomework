let pizzaPlace = `Pizza Castle`;
let numberOfToppings = 15;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);

console.log(numberOfToppings);
console.log(typeof numberOfToppings);

console.log(`My ` + pizzaPlace + ` serves ` + numberOfToppings + ` toppings.`);

if (numberOfToppings < 10) {
    console.log("Quality, not quantity.")
} else {
    console.log("A whole lot of pizza.")
}
for (i = 2; i <= 15; i++) {  
    if (i % 2 == 0) { console.log(i); }
}