const userModel = require("../model/userModel");
const mailer = require("../helpers/mailing");
const bcrypt = require("bcrypt");
const userRegister = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    const haspasswrod = await bcrypt.hash(password, 10);
    const isemailexist = await user.findOne({ email });
    if (isemailexist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newUser = new userModel({
      name,
      email,
      mobile,
      password: haspasswrod,
      image: "images/" + req.file.filename,
    });
    const userdata = await newUser.save();
    // const msg = `<p>hi '</p>`;
    // mailer.sendMail(email, 'verify mail ' , msg)
    return res.status(201).json({
      success: true,
      msg: "User Register successfully",
      user: userdata,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      meg: error.message,
    });
  }
};

const signinWithGoogleController = async (req, res) => {
  try {
    const { googleId, name, email } = req.body;
    if (!googleId || !name || !email) {
      return res
        .status(400)
        .send({ message: "Invalid Credentials", success: false });
    }
    let user = await userModel.findOne({ email });
    if (!user) {
      user = new userModel({ isVerified: true, ...req.body });
      await user.save();
    }
    const token = await user.generateAccessToken();

    const options = {
      httpOnly: true,
      secure: true,
    };
    res.status(200).cookie("token", token, options).json({
      message: "Login successfully",
      token: token,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal server Error in login",
      success: false,
    });
  }
};
module.exports = { userRegister, signinWithGoogleController };
