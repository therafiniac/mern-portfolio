const bcrypt = require("bcryptjs"); // Add this line
const User = require("../models/userModel");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello from home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).send({
      message: "registration successful",
      token: userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).send({
        message: "login  successful",
        token: userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json({ error: "internal server error" });
    next(error);
  }
};

module.exports = { home, register, login };
