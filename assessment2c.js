// Assignment given by trainer

//Using Switch Condition
// Taking user input
let p = parseInt(prompt("Enter the first value (p):"));
let q = parseInt(prompt("Enter the second value (q):"));
let r = parseInt(prompt("Enter the third value (r):"));

// Determine the greatest value
let greatest =
  p > q && p > r ? "p" : q > p && q > r ? "q" : r > p && r > q ? "r" : "tie";

// Use switch statement to output the result
switch (greatest) {
  case "p":
    console.log("p is the greatest: " + p);
    break;
  case "q":
    console.log("q is the greatest: " + q);
    break;
  case "r":
    console.log("r is the greatest: " + r);
    break;
  default:
    console.log("There is a tie.");
}