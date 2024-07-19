// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ibsn, numPages, timesCheckedOut, discarded) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ibsn = ibsn;
    this.numPages = numPages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
    }
    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyrightDate, ibsn, numPages, timesCheckedOut, discarded) {
    super(title, author, copyrightDate, ibsn, numPages, timesCheckedOut, discarded);
    }
    dispose(currentYear) {
        if(currentYear - this.copyrightDate > 5) {
            this.discarded = "Yes";
        }
    }
}

class Novel extends Book{
    constructor(title, author, copyrightDate, ibsn, numPages, timesCheckedOut, discarded) {
    super(title, author, copyrightDate, ibsn, numPages, timesCheckedOut, discarded)
    }
    dispose() {
        if (this.timesCheckedOut > 100) {
            this.discarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let novelOne = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No")
let manualOne = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No")

// Code exercises 4 & 5 here:
manualOne.dispose(2024);
console.log(manualOne);

novelOne.checkout(5)
console.log(novelOne);