// Assignment given by trainer

//If else Ladder                                                                                                                                                       // Taking user input
var a = parseInt(prompt("Enter the first value (a):"));
var b = parseInt(prompt("Enter the second value (b):"));
var c = parseInt(prompt("Enter the third value (c):"));

// If-Else Ladder
if (a > b && a > c) {
  console.log("a is the greatest: " + a);
} else if (b > a && b > c) {
  console.log("b is the greatest: " + b);
} else if (c > a && c > b) {
  console.log("c is the greatest: " + c);
} else {
  console.log("There is a tie.");
}

