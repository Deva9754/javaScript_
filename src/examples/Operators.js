let age = prompt("what's your age ");
age = Number.parseInt(age);

switch (age) {
  case 17:
    console.log("invalid age ");
    break;
  case 18:
    console.log("you can drive");
    break;
  case 70:
    console.log("over age ");
    break;
  default:
    console.log("out");
}

let age1 = prompt("whats ur age ");
age1 = Number.parseInt(age1);
if (age1 > 10 && age < 20) {
  console.log("ur are in between");
} else {
  console.log("not in between");
}

let num = prompt("enter a number");
num = Number.parseInt(num);
if (num % 2 === 0 && num % 3 === 0) {
  console.log("okay");
} else {
  console.log("not okay");
}

let number1 = prompt("enter a number");
number1 = Number.parseInt(number1);
if (number1 % 2 === 0) {
  console.log("Divisible by 2");
} else if (number1 % 3 === 0) {
  console.log(" Divisible by 3");
} else {
  console.log("not divisible");
}
let number = prompt("enter a number");
number = Number.parseInt(number);

console.log(number > 18 ? "you can drive" : "you cannot drive");
