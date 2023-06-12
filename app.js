const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());
app.get("/", (req, res) => {
    console.log(req);
  res.send("Hello Express!");
});
app.get("/cats", (req, res) => {
  const total = 2 + 2;
  res.send(`Meow! ${total}`);
});
app.get("/projects", function (request, response) {
  response.send("Project Page");
});
app.get("/about", function (req, res) {
  res.send("About Page");
});
// req parameter
app.get('/users/:id',(req, res) => {
    console.log(req.params);
    res.send(`this is ${req.params.id}'s user page`);
})
// get user by id, and their blog post by id
app.get('/users/:id/posts/:postid', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})
app.get('/gohome', (req, res) => {
    res.redirect('/')
})
// search route
// req.query
// sample url: localhost:3000/search/?q=example
app.get('/search', (req, res) => {
 console.log(req.query);
 res.send("Search Page");
})
// post request
app.post('/register', (req, res) => {
    console.log(req.body);
    res.send("A new user was created");
})
app.put('/edit', (req, res) => {
    console.log(req.body);
    res.send("the user has been edited")
});
// patch request
app.patch('/edit', (req, res) => {
    console.log(req.body);
res.send("the user has been updated (patched)");
})
// delete
app.delete('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(`the user with the ID ${req.params.id} was deleted`);
})
// 404 not found
app.get("*", (req, res) => {
  res.send("Thse are not the droids you are looking for");
});
app.listen(port, () => {
  console.log(`Example app is listening on ${port}, http://localhost:${port}`);
});

// https://www.youtube.com/watch?v=qYoc07Da6kg