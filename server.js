const express = require("express");
const app = express();

let books = [
  {
    id: "b1",
    title: "Book One",
    description: "Description of book one",
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Book Two",
    description: "Description of book two",
    authorId: "a2",
  },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here
app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/books/:id", (req, res) => {
  const book_id = req.params.id;
  const selected = books.find((b) => b.id === book_id);
  res.send(selected);
});

app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.get("/reviews/:id", (req, res) => {
  const review_id = req.params.id;
  const selected = reviews.find((r) => r.id === review_id);
  res.send(selected);
});

app.get("/authors", (req, res) => {
  res.send(authors);
});

app.get("/authors/:id", (req, res) => {
  const author_id = req.params.id;
  const selected = authors.find((a) => a.id === author_id);
  res.send(selected);
});

app.listen(4123, () => {
  console.log("Bookstore app is running on port 5000");
});
