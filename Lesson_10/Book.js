export class Book {
    constructor(name, author, yearOfPublication) {
        this.name = name;
        this.author = author;
        this.yearOfPublication = yearOfPublication;

    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get yearOfPublication() {
        return this._yearOfPublication;
    }

    set name(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("The value 'name' cannot be empty and must be a string");
        }
        this._name = value.trim();

    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("The value 'author' cannot be empty and must be a string");
        }
        this._author = value.trim();

    }

    set yearOfPublication(value) {
        if (typeof value !== "number" || value <= 0) {

            throw new Error("The value 'yearOfPublication' cannot be empty and must be a number");

        }

        this._yearOfPublication = value;

    }



    printInfo() {
        console.log(`The book "${this.name}" was written by ${this.author} in ${this.yearOfPublication} year of publication`)

    }


    static bookSorting (booksArray){

        if (booksArray.length === 0){
            throw new Error ("The array must not be empty");
        }

        const oldest = booksArray.reduce((OldestBook, currentBook) => {
            return currentBook.yearOfPublication < OldestBook.yearOfPublication ? currentBook:OldestBook;
        });
        return oldest;
    }
}

const book1 = new Book("Comet in Moominland", "Tove Jansson", 1946);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book3 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
const book4 = new Book("67", "test", 1988);

book4.name = "Harry Potter";

const books = [book1, book2, book3, book4];
const oldest = Book.bookSorting (books);

// console.log(`The oldest book is ${oldest.yearOfPublication}`);

// book1.printInfo();
// book2.printInfo();
// book3.printInfo();
// book4.printInfo();