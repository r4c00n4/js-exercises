// 1. without running the code - write down what you think will be the result
// 2. run the code and verify your result
// 3. using some of the language we learned today, explain to somebody else in your breakout room why we got those results

let greeting = "Holla ";
let name = "Richard";

function sayHello(name) {
  let greeting = "Hi ";
  console.log(greeting + name);
}
// it is declared inside the function and can't be changed as it is a block scoop and you can only declare with "let" once
sayHello("Etzali");

const goodbye = "Au revoir ";
const personName = "Emilia";

function sayGoodbye(name) {
  console.log(goodbye + personName);
}
// const value can't be changed even tho we calling the function with Gianluca name but we logging the value of goodbye + personName
sayGoodbye("Gianluca");
