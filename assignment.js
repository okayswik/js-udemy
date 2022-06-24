const task3Element = document.getElementById("task-3");

function hello() {
  alert("hola");
}

function userName(name) {
  alert("Hi" + name);
}

function combine(str1, str2, str3) {
  const combinedText = `${str1} ${str2} ${str3}`;
  return combinedText;
}

userName("swik");

task3Element.addEventListener("click", hello);

const combineString = combine("hi", "hello", "swik");
alert(combineString);
