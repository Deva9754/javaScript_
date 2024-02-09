//Arrays

const marks = [59, 54, 67, 23, 67, 65, 78];

const marks1 = [59, 54, 67, 23, 67, 65, 78];
const new_array = marks.concat(marks1);
console.log(new_array.length);
let compare = (a, b) => {
  return a - b;
};
console.log(marks.sort(compare));
console.log(marks.slice(2, 6));
let arr = Array.from(marks);
console.log("Array from" + arr);

const student = marks.map((stu) => {
  console.log("map" + stu);
});
let details = marks.filter((fdata) => {
  return fdata > 50;
});
console.log("fdata" + details);

const new_arr = marks.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(new_arr);

//Loops
const marks3 = [59, 54, 67, 23, 67, 65, 78];
for (let i = 0; i < marks.length; i++) console.log(marks[i]);
delete marks[0];
console.log(marks.length);
console.log(marks3);

const marks2 = [59, 54, 67, 23, 67, 65, 78];

const marks11 = [59, 54, 67, 23, 67, 65, 78];
const new_array1 = marks.concat(marks1);
console.log(new_array.length);
console.log(marks2, marks11);
let compare1 = (a, b) => {
  return a - b;
};
console.log(marks.sort(compare));
console.log(marks.slice(2, 6));
let arr1 = Array.from(marks);
console.log("Array from" + arr);

// map, filter, reduce;

const student1 = marks.map((stu) => {
  console.log("map" + stu);
});
let details1 = marks.filter((fdata) => {
  return fdata > 50;
});
console.log("fdata" + details);

const new_arr1 = marks.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(new_arr);

let ab;
do {
  a = prompt("enter a number");
  a = Number.parseInt(a);
  marks.push(a);
} while (a != 0);
console.log(marks);

const detail = marks.filter((data) => {
  return data % 2 == 0;
});
console.log(detail);

const square = marks.map((data) => {
  return data * data;
});
console.log(square);

let a = prompt("enter ur age ");
a = Number.parseInt(a);
if (a >= 18) {
  alert("you can Drive");
} else if (a <= 18) {
  alert("you cannot Drive");
  // eslint-disable-next-line no-restricted-globals
  location.href =
    "https://dribbble.com/shots/16185509-Profile-Card/attachments/8044007?mode=media";
} else {
  // eslint-disable-next-line no-undef
  document.body.style.background = color;
}
