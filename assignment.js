const sayHello = (name) => console.log("Hi " + name);

sayHello(`swik`);

// task 3

const sayHello2 = (name, phrase) => console.log(phrase + "" + name);
const sayHello3 = () => console.log("Hi hardcode");
const sayHello4 = (name) => "Hi " + name;

sayHello("swik");
sayHello2("hello", "Cutie");
sayHello3();
console.log(sayHello4("swik"));

const sayHello5 = (name, phrase = "Hey") => console.log(phrase + "" + name);

sayHello5("Baby");
sayHello5("Baby", "Lovely");

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
    if (!hasEmptyText) {
      cb();
    }
  }
}

checkInput(() => {
  console.log("all not empty");
});
