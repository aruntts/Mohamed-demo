const express = require(`express`);
const app = express();
app.use(express.json());

const crudapi = require(`./Routes/CRUDapi`);
const uploadFile = require("./Routes/upload");
const validator = require("./Routes/validation");
const test = require("./Routes/test");

app.use(crudapi);
app.use(uploadFile);
app.use(validator);
app.use(test);
app.listen(3001);
