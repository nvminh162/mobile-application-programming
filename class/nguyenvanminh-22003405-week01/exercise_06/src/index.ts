function author(name: string): string {
  return `Hello, ${name}!`;
}

console.log(
  author("6. Create a class Book with attributes title, author, year.")
);

class Book {
  attributes: string;
  title: string;
  author: string;
  year: number;

  constructor(attributes: string, title: string, author: string, year: number) {
    this.attributes = attributes;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  display(): string {
    return `attributes: ${this.attributes} title: ${this.title} author: ${this.author} year: ${this.year}`;
  }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "Harper Lee", 1960);
console.log(book1.display());
