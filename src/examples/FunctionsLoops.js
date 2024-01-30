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
////

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

const marks3 = [59, 54, 67, 23, 67, 65, 78];
// // for( i=0;i<marks.length;i++)
// // console.log(marks[i])
// // delete marks[0]
// // console.log(marks.length)

// const marks=[59,54,67,23,67,65,78]

// const marks1=[59,54,67,23,67,65,78]
// const new_array=marks.concat(marks1)
// console.log(new_array.length)
// let compare = (a,b)=>{
//     return a-b
// }
// console.log(marks.sort(compare))
// console.log(marks.slice(2,6))
// let arr = Array.from(marks)
// console.log("Array from"+arr)

// const student = marks.map((stu)=>{
//     console.log("map"+stu)
// }
// )
// let details = marks.filter((fdata)=>{
//   return fdata>50
// })
//     console.log("fdata"+details)

//     const new_arr = marks.reduce((h1,h2)=>{
//         return h1+h2
//     })
//     console.log(new_arr);

// let a;
// do{
//  a = prompt("enter a number");
//  a =Number.parseInt(a);
// marks.push(a)
// }
// while(a!=0)
// console.log(marks)

// const detail = marks.filter((data)=>{
//     return data%2==0

// })
// console.log(detail);

// const square = marks.map((data)=>{
//     return data*data
// })
// console.log(square)

let a = prompt("enter ur age ");
a = Number.parseInt(a);
if (a >= 18) {
  alert("you can Drive");
} else if (a <= 18) {
  // alert("you cannot Drive")
  // eslint-disable-next-line no-restricted-globals
  location.href =
    "https://dribbble.com/shots/16185509-Profile-Card/attachments/8044007?mode=media";
} else {
  // eslint-disable-next-line no-undef
  document.body.style.background = color;
}
