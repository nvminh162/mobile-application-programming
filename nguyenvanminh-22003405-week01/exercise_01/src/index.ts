function author(name: string): string {
  return `Hello, ${name}!`;
}
console.log(
  author(
    "1. Create a class Person with attributes name and age. Write a method to display this information."
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

// Example usage
const person1 = new Person("Nguyen Van Minh", 20);
const person2 = new Person("John Doe", 25);

console.log(person1.displayInfo());
console.log(person2.displayInfo());
