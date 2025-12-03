function author(name: string): string {
  return `Hello, ${name}!`;
}

console.log(
  author(
    "4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter."
  )
);

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  displayInfo(): string {
    return `width: ${this.width}, height: ${this.height}`;
  }

  calcArea(width: number, height: number): number {
    return width * height;
  }

  calcPerimeter(width: number, height: number): number {
    return 2 * (width + height);
  }
}

const rectangle = new Rectangle(5, 5);

console.log("Rectangle Information:");
console.log(rectangle.displayInfo());
console.log(`Area: ${rectangle.calcArea(5,5)}`);
console.log(`Perimeter: ${rectangle.calcPerimeter(5,5)}`);

