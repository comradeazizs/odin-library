let myLibrary = [
  {
    title: "The Iron Heel",
    author: "Jack London",
    pages: 354,
    read: false,
    date: "1908"
  },
  {
    title: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    pages: "177",
    read: true,
    date: "1943"
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
    `<p>Title: ${book.title}</p>
    <p>By ${book.author}</p>
    <p>${book.pages} pages</p>
    <p>Publish Date: ${book.date}</p>
    <button type="button" class="remove btn">Remove</button>
    <button type="button" class="read btn ${book.read ? "green" : "red"}">
    ${book.read ? "Read" : "Not read"}</button>
    </div>`
  );
  shelf.appendChild(card);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeCardEvent() {
  remove.forEach((button) => {
    button.addEventListener("click", (e) => {
      const nodesArray = [...document.querySelectorAll(".card")];
      const index = nodesArray.indexOf(e.target.parentElement);
      shelf.removeChild(e.target.parentElement);
      myLibrary.splice(index, 1);
    });
  });
}

function readCardEvent() {
  readBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const nodesArray = [...document.querySelectorAll(".card")];
      const index = nodesArray.indexOf(e.target.parentElement);
      if (myLibrary[index].read) {
        myLibrary[index].read = false;
        e.target.textContent = "Not read";
        e.target.classList.replace("green", "red")
      } else {
        myLibrary[index].read = true;
        e.target.textContent = "Read";
        e.target.classList.replace("red", "green")
      }
    });
  });
}

const shelf = document.querySelector(".shelf");
const form = document.querySelector(".form-container");
const title = document.querySelector("input[name=title]");
const author = document.querySelector("input[name=author]");
const pages = document.querySelector("input[name=pages]");
const date = document.querySelector("input[name=date]");
const read = document.querySelector("input[name=read]");
const addBtn = document.querySelector(".addBtn");
const modal = document.querySelector(".modal");
const modBtn = document.querySelector(".modalBtn");
const modClose = document.querySelector(".close");

modClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(
    new Book(title.value, author.value, pages.value, read.checked, date.value)
  );
  while (shelf.firstChild) {
    shelf.removeChild(shelf.firstChild);
  }
  myLibrary.forEach(printCard);
  remove = document.querySelectorAll(".remove");
  removeCardEvent();
  readBtn = document.querySelectorAll(".read");
  readCardEvent();
  form.reset();
  modal.style.display = "none";
});

myLibrary.forEach(printCard);

let remove = document.querySelectorAll(".remove");
removeCardEvent();

let readBtn = document.querySelectorAll(".read");

readCardEvent();
