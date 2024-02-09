let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(65);
    }, 2000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(54);
    }, 3000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(65);
    }, 4000);
  });
};

const result = async () => {
  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let abc = await Promise.all([p1, p2, p3]);
};
result();

// make a promise with interval of 3 sec and handle error with async and await

let bc = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Error("erroe is occured"));
    }, 3000);
  });
};

let a2 = async () => {
  try {
    let c = await bc();
    console.log(c);
  } catch (err) {
    console.log("error is handled successfully ");
  }
};

// fetch

let pro = fetch(
  `https://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no`
)
  .then((value) => {
    console.log(value.status);
    return value.json();
    console.log(value.ok);
  })
  .then((value1) => {
    console.log(value1);
  });

const weatherapi = async () => {
  let result = await fetch("");
  let response = await result.json();
  console.log(response);
};
weatherapi();

// localstorage
let n = localStorage.getItem("notes");
alert("your notes is " + n);

let a = prompt("enter ur notes");
if (!a) {
  localStorage.setItem = ("notes", a);
}

// eslint-disable-next-line no-restricted-globals
let c = confirm("Do you want to delete");
if (c) {
  localStorage.removeItem("note");
  alert("Your notes is successfully deleted");
}
