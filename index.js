const express = require(`express`);
const app = express();
app.use(express.json());
const employees = [
  {
    id: 1,
    name: "arun",
    email: "arun@gmail.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Dhaanish",
    email: "dhaanish@gmail.com",
    phone: "12345678",
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@gmail.com",
    phone: "1234567",
  },
  {
    id: 4,
    name: "Simon",
    email: "simon@gmail.com",
    phone: "123456",
  },
  {
    id: 5,
    name: "Siddik",
    email: "siddik@gmail.com",
    phone: "123456783",
  },
];
app.get("/api/users", (req, res) => {
  res.json(employees);
});
app.post("/api/users", (req, res) => {
  const user = {
    id: employees.length + 1,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  employees.push(user);
  res.json(employees);
});
app.get("/api/users/:id", (req, res) => {
  const user = employees.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }
  res.json(user);
});
app.put("/api/users/:id", (req, res) => {
  let person = employees.find((u) => u.id === parseInt(req.params.id));

  if (!person) {
    res.status(404);
    throw new Error("user not found!");
  }

  person.name = req.body.name;
  person.email = req.body.email;
  person.phone = req.body.phone;
  res.json(employees);
});
app.delete("/api/users/:id", (req, res) => {
  const user = employees.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    res.status(404);
    throw new Error("user not found!");
  }
  const deleteUser = employees.indexOf(user);
  employees.splice(deleteUser, 1);
  res.json(employees);
});

app.listen(3001);
