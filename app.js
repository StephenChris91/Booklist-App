// Book Class: Represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const checkBooks = document.querySelector('#title').value;

        if (checkBooks == Store.getBooks(book.title)) {
            return UI.showAlerts('This Book already exists', 'danger');
        } else {
            const list = document.querySelector('#book-list');

            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

            list.appendChild(row);
        }

    };


    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlerts(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Vanish in 3 Seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }
}
// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }


    static removeBook() {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//Events: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent Default
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate 
    if (title === '' || author === '' || isbn === '') {
        UI.showAlerts('Please fill in all fields', 'danger');
    } else {
        //instantiate a book
        const book = new Book(title, author, isbn);


        // Add Book To UI
        UI.addBookToList(book);

        //Add Book To Store
        Store.addBook(book);

        //Show Success message
        UI.showAlerts('Book Added', 'success')

        // Clear Fields
        UI.clearFields()
    }
});
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);

    //Show Success message
    UI.showAlerts('Book Removed', 'info');
})