let pizzaToppings = [" Pepperoni", " Pinneapple", " Bacon", " Onion"];
let greeting = "Welcome to Pizza Planet ";
let size = ["small", " medium", " large"];
let crust = ["thin crust", " thick crust"]

function greetCustomer() {
    return (greeting + "our toppings are " + pizzaToppings)
};
console.log(greetCustomer())

function getPizzaOrder() {
    return ("One " + size[2] + crust[1] + " pizza with " + pizzaToppings + " coming up!")
};
console.log(getPizzaOrder())

function preparePizza() {
    return (" Cooking pizza" + size[2] + crust[1] + pizzaToppings)
};
console.log(preparePizza())

function servePizza() {
    return ("Order up! Here's your " + size[2] + crust[1] + pizzaToppings + " Enjoy!")
};
console.log(servePizza())