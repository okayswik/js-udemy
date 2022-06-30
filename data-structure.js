const age = [30, 29, 45];

// [30, 45, 54]

age.unshift(10); // Linear Time Complexity

age.push(60);

// constant time complexity

const myAge = age[1];

// constant time complexity

// --

const namePopularity = [
  { userName: "max", usages: "4" },
  { userName: "swik", usages: "7" },
];

const swikUsages = namePopularity.find(
  (pers) => pers.userName === "swik"
).usages;

//Best Case: Constant Time Complexity => 0(1)

const nameMap = {
  max: 4,
  swik: 7,
};

const swikUsages = nameMap["swik"]; //Constant Time Complexity
