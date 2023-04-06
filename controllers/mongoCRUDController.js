const { Company } = require("../schema/mongoSchema");

const create = async (req, res) => {
  try {
    const { Serial_Number, Employee_name, Company_Name, Description, Leave } =
      req.body;
    const company = await Company.create({
      Serial_Number,
      Employee_name,
      Company_Name,
      Description,
      Leave,
    });
    res.json(company);
    console.log(company);
  } catch (e) {
    console.log(e.message);
  }
};

const getAll = async (req, res) => {
  try {
    const company = await Company.find();
    res.json({
      Serial_Number: company.Serial_Number,
      Company_Name: company.Company_Name,
      Employee_Name: company.Employee_name,
      Description: company.Description,
    });
    console.log(company);
  } catch (e) {
    console.log(e.message);
  }
};
const getById = async (req, res) => {
  try {
    const company = await Company.findById(req.params._id);
    res.json({
      Serial_Number: company.Serial_Number,
      Company_Name: company.Company_Name,
      Employee_Name: company.Employee_name,
      Description: company.Description,
    });
    console.log(company);
  } catch (e) {
    console.log(e.message);
  }
};
const updateAll = async (req, res) => {
  try {
    const company = await Company.findById(req.params._id);
    const companyUpdate = await Company.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    res.json(companyUpdate);
    console.log(companyUpdate);
  } catch (e) {
    console.log(e.message);
  }
};
const deleteAll = async (req, res) => {
  try {
    const company = await Company.findById(req.params._id);
    const companyDelete = await Company.findByIdAndDelete(req.params._id);
    res.json(companyDelete);
    console.log(companyDelete);
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = { create, getAll, getById, updateAll, deleteAll };
