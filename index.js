const express = require(`express`);
const app = express();
app.use(express.json());
const errorHandler = require("./Middleware/errorHandler");
const crudapi = require(`./Routes/CRUDapi`);
const uploadFile = require("./Routes/upload");
app.use(express.json());
app.use(crudapi);
app.use(uploadFile);

app.listen(3001);
