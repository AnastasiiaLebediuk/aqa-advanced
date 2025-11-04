import { Book } from './Book.js';

class EBook extends Book {
    constructor(name, author, yearOfPublication, fileFormat) {
        super(name, author, yearOfPublication);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error ("The value 'fileFormat' cannot be empty and must be a string");
        }
        this._fileFormat = value.trim();
    }


    printEbook() {
        console.log(`The book "${this.name}" was written by ${this.author} in ${this.yearOfPublication} year of publication, format ${this.fileFormat}`);

    }


     static fromBook (bookInstance, fileFormat){

        if (!(bookInstance instanceof Book)){
            throw new Error ("bookInstance is not an instance of Book");
        }
        return new EBook (bookInstance.name, bookInstance.author, bookInstance.yearOfPublication, fileFormat);
    }
}

const eBook1 = new EBook("Comet in Moominland", "Tove Jansson", 1946, "PDF");
const eBook2 = new EBook("The Hobbit", "J.R.R. Tolkien", 1937, "PDF");
const eBook3 = new EBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "PDF");
const book4 = new Book("h", "5454", 9);

book4.name = "Harry 999 Potter";

const eBook4 = EBook.fromBook(book4, "PDF");


// eBook1.printEbook();
// eBook2.printEbook();
// eBook3.printEbook();
eBook4.printEbook();