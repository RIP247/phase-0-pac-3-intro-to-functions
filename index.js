// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
  } 
  sayHello();

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  say("Goodbye", "Julio");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));
  console.log(say("Hello", "Liz"));