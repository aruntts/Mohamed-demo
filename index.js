const express = require(`express`);
const app = express();
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
app.use(express.json());

const crudapi = require(`./Routes/CRUDapi`);
const uploadFile = require("./Routes/upload");
const validator = require("./Routes/formValidation");
const jwt = require("./Routes/jwt");
const bcrypt = require("./Routes/bcrypt");
app.use(crudapi);
app.use(uploadFile);
app.use(validator);
// app.use(jwt);
app.use(bcrypt);
app.use("/userauth", require("./Routes/userAuthentication"));
app.listen(3001);
