const User = require("../Model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  const { email, password, username, role, fullName, phoneNumber, address } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, role, fullName, phoneNumber, address });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
}

module.exports.Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const auth = (password === user.password)
    // const auth = await bcrypt.compare(password, user.password)
    console.log(password, "fake",  user.password, " auth")
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true, // Set to true for security
      secure: process.env.NODE_ENV === 'production', // Use secure in production
      sameSite: 'strict' // SameSite setting
    });
    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      token: token,
      user: user
    });
    next()
  } catch (error) {
    console.error(error);
  }
}