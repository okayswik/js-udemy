class Course {
  #price;

  get price() {
    return "$" + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid value!";
    }
    this.#price = value;
  }

  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  calculateValue() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
}

const nodeCourse = new Course("Node ", 50, 44);
const reactCourse = new Course("React.js", 50, 36);

console.log(nodeCourse);
console.log(reactCourse);

console.log(nodeCourse.calculateValue());
console.log(reactCourse.calculateValue());

nodeCourse.printSummary();
reactCourse.printSummary();

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, price, length);
    this.numOfExercises = exercisesCount;
  }
}

const angularCourse = new PracticalCourse("Angular", 36, 50, 10);

console.log(angularCourse);
angularCourse.printSummary();

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}

const expressCourse = new TheoreticalCourse("Express", 50, 48);

expressCourse.price = 5000;
expressCourse.#price = 100;
expressCourse.printSummary();
expressCourse.publish();
