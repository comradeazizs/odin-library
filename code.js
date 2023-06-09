let myLibrary = [
  {
    title: "The Iron Heel",
    author: "Jack London",
    pages: 354,
    read: false,
    date: 1908
  },
  {
    title: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    pages: "177",
    read: true,
    date: 1943
  }
];

function Book(title, author, pages, read, date) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.date = date;
}

function printCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.setHTML(
    `<p>Book title: ${book.title}</p>
    <p>Book author: ${book.author}</p>
    <p> ${book.pages} pages</p>
    <p>${book.read ? "read" : "not read yet"}</p>
    <p>Publish date: ${book.date}</p>
    </div>`
  );
  shelf.appendChild(card);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const shelf = document.querySelector(".shelf");
const form = document.querySelector(".form-container");
const title = document.querySelector("input[name=title]");
const author = document.querySelector("input[name=author]");
const pages = document.querySelector("input[name=pages]");
const date = document.querySelector("input[name=date]");
const read = document.querySelector("input[name=read]");

const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(
    new Book(title.value, author.value, pages.value, read.checked, date.value)
  );
  while (shelf.firstChild) {
    shelf.removeChild(shelf.firstChild);
  }
  myLibrary.forEach(printCard);
  form.reset();
});

myLibrary.forEach(printCard);
