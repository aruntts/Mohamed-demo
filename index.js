const express = require(`express`);
const app = express();
app.use(express.json());
const crudapi = require(`./Routes/CRUDapi`);
const uploadFile = require("./Routes/upload");
const validator = require("./Routes/formValidation");
const jwt = require("./Routes/jwt");
const bcrypt = require("./Routes/bcrypt");
const dbConnection = require("./config/mongo");
dbConnection();
//importing into application middleware
app.use(crudapi);
app.use(uploadFile);
app.use(validator);
app.use(jwt);
app.use(bcrypt);
app.use("/mongo/crud", require("./Routes/mongoCRUD"));
app.use("/userauth", require("./Routes/userAuthentication"));
app.listen(3001);

// db.companies.aggregate([
//   { $match: { Employee_name: "AR KHAN" } },
//   { $group: { _id: "$Employee_name", total: { $sum: "$Networth$" } } },
// ]);
