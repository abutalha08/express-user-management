const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from users world");
});

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Jim Doe", email: "jim@example.com" },
];

app.get("/users", (req, res) => {
  // res.send('Users are waking up');
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("data in the request:", req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.send({
    success: true,
    data: newUser,
    message: "User added successfully",
  });
});

app.get("/products", (req, res) => {
  res.send("Products are showing here");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
