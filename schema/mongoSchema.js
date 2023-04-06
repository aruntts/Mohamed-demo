const mongoose = require("mongoose");

//User Schema
const address = mongoose.Schema({
  city: { type: String },
  state: { type: String },
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  age: {
    type: Number,
    immutable: true,
    min: 1,
    required: true,
    validate: {
      validator: (v) => v % 2 == 0,
      message: (props) => `${props.value} is not even!`,
    },
  },
  hobbies: { type: [String], lowercase: true },
  address: address,
  bestfriend: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  created_at: {
    type: Date,
    default: () => {
      Date.now();
    },
  },
  updated_at: { type: Date },
});

userSchema.methods.sayHi = function () {
  console.log(`Hi this is ${this.name}`);
};
userSchema.statics.findbyName = function (names) {
  return this.where({ name: names });
};

userSchema.virtual("namedFunction").get(function () {
  return `${this.name} ${this.address}`;
});

//Company Schema
const companySchema = mongoose.Schema({
  Serial_Number: {
    type: Number,
    min: 1,
    required: true,
  },
  Company_Name: {
    type: String,
    uppercase: true,
    required: true,
  },
  Employee_name: {
    type: String,
    uppercase: true,
    required: true,
  },
  Description: {
    type: String,
    uppercase: true,
    required: true,
  },
  Leave: {
    type: Number,
    required: true,
  },
});
companySchema.methods.sayHello = function () {
  console.log(`The ceo of ${this.Company_Name} is ${this.Employee_Markme}`);
};
companySchema.statics.findByCompany = function (name) {
  return this.where({ Company_Name: name });
};
const test = mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
});
const User = mongoose.model("User", userSchema);
const Company = mongoose.model("Company", companySchema);
// const Test = mongoose.model("Test", test);
// const testCreate = async () => {
//   const testCreate2 = await Test.create({
//     name: "Dhaanis",
//     number: 9092695723,
//   });
//   console.log(testCreate2);
// };

// testCreate();
module.exports = { User, Company };
