class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        this.books.push(newBook);
        this.displayBooks();
    }

    removeBook(index) {
        this.books.splice(index, 1);
        this.displayBooks();
    }

    toggleReadStatus(index) {
        this.books[index].toggleReadStatus();
        this.displayBooks();
    }

    displayBooks() {
        const libraryContainer = document.getElementById("library");
        libraryContainer.innerHTML = "";

        this.books.forEach((book, index) => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <p><strong>${book.title}</strong> by ${book.author}</p>
                <p>${book.pages} pages</p>
                <p>${book.read ? "Read" : "Not read yet"}</p>
                <button onclick="library.removeBook(${index})">Remove</button>
                <button onclick="library.toggleReadStatus(${index})">Toggle Read Status</button>
            `;
            libraryContainer.appendChild(bookCard);
        });
    }
}

const library = new Library();

document.getElementById("newBookButton").addEventListener("click", () => {
    document.getElementById("formContainer").classList.toggle("hidden");
});

document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    library.addBook(title, author, pages, read);
    document.getElementById("bookForm").reset();
    document.getElementById("formContainer").classList.add("hidden");
});

// Example Books
library.addBook("The Hobbit", "J.R.R. Tolkien", 295, false);
library.addBook("1984", "George Orwell", 328, true);

library.displayBooks();
