const express = require(`express`);
const app = express();
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
app.use(express.json());

const crudapi = require(`./Routes/CRUDapi`);
const uploadFile = require("./Routes/upload");
const validator = require("./Routes/validation");
const test = require("./Routes/test");
const jwt = require("./Routes/jwt");
const bcrypt = require("./Routes/bcrypt");
app.use(crudapi);
app.use(uploadFile);
app.use(validator);
app.use(test);
app.use(jwt);
app.use(bcrypt);

app.listen(3001);
