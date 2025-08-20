function author(name: string): string {
  return `Hello, ${name}!`;
}

console.log(
  author(
    "3. Create a class Car with properties brand, model, year. Write a method to show car info."
  )
);

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo(): string {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }
}

const car = new Car("HONDA", "IUH", 2025);

console.log("Car Information:");
console.log(car.displayInfo());