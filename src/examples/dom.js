let user = prompt("enter ur choice");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["s", "w", "g"][cpuI];

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody wins";
  } else if (cpu === "s" && user === "w") {
    return "cpu";
  } else if (cpu === "s" && user === "g") {
    return "cpu";
  } else if (cpu === "w" && user === "g") {
    return "cpu";
  } else if (cpu === "w" && user === "s") {
    return "cpu";
  } else if (cpu === "g" && user === "s") {
    return "cpu";
  }
};
let result = match(cpu, user);

console.log(`user:${user} & cpu : ${cpu} \n result: ${result}`);
