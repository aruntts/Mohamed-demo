const express = require(`express`);
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());
const errorHandler = require("../Middleware/errorHandler");
const { crudSchema } = require("../schema/validationSchema");
const crudValidateSchema = require("../Middleware/validationResult");
const employees = [
  {
    id: 1,
    name: "Tristan Tate",
    email: "tristan@gmail.com",
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
    name: "Dan Bilzerian",
    email: "bilzerian@gmail.com",
    phone: "1234567",
  },
  {
    id: 4,
    name: "Andrew Tate",
    email: "andrew@gmail.com",
    phone: "123456",
  },
  {
    id: 5,
    name: "Siddik",
    email: "siddik@gmail.com",
    phone: "123456783",
  },
];
router.get("/api/users", (req, res) => {
  res.json(employees);
});
router.use(errorHandler);
router.post("/api/users", crudSchema, crudValidateSchema, (req, res) => {
  const user = {
    id: employees.length + 1,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  employees.push(user);
  res.json(employees);
});

router.get("/api/users/:id", (req, res) => {
  const user = employees.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }
  res.json(user);
});
router.use(errorHandler);
router.put("/api/users/:id", crudSchema, crudValidateSchema, (req, res) => {
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

router.delete("/api/users/:id", (req, res) => {
  const user = employees.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    res.status(404);
    throw new Error("user not found!");
  }
  const deleteUser = employees.indexOf(user);
  employees.splice(deleteUser, 1);
  res.json(employees);
});
router.use(errorHandler);
module.exports = router;
