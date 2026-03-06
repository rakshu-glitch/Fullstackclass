function greetUser(name, greeting = "Hello") {
  return greeting + " " + name;
}

console.log(greetUser("Rakshit")); 
console.log(greetUser("Rakshit", "Good Morning"));
