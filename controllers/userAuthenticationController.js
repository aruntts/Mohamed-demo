const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const profiles = [];

//Get All Users
const getUsers = (req, res) => {
  res.json(profiles);
};

//Create User
const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const data = {
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  };
  profiles.push(data);
  res.json({ data });
};

//Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const user = profiles.find((u) => u.email === email);

  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("Valid user is signed");
    const accessToken = jwt.sign(
      {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      `${process.env.JWT_SECRET_KEY}`,
      { expiresIn: "15m" }
    );
    res.json({ accessToken: accessToken });
  } else {
    res.status(401).send("user invalid");
    throw new Error("user invalid");
  }
};
//validate user
const currentUser = async (req, res) => {
  res.json(req.user);
};

module.exports = { getUsers, createUser, loginUser, currentUser };
