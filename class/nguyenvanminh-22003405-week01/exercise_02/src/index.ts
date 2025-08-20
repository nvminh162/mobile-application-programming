function author(name: string): string {
  return `Hello, ${name}!`;
}

console.log(
  author(
    "2. Write a class Student extending Person with an additional attribute grade. Add a method to display all info."
  )
);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }

  displayInfo(): string {
    return this.displayAllInfo();
  }
}

const student1 = new Student("Nguyen Van Minh", 20, "A");
const student2 = new Student("Jane Smith", 19, "B+");

console.log("Student Information:");
console.log(student1.displayAllInfo());
console.log(student2.displayAllInfo());