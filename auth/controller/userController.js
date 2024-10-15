const userModel = require("../model/userModel");
const mailer = require("../helpers/mailing");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const newUser = new userModel({
      name,
      email,

      password: hashedPassword,
      image: "images/" + req.file.filename,
      verificationToken,
    });

    // Save the new user to the database
    const userData = await newUser.save();
    // Send the verification email
    const verifyUrl = `http://localhost:7096/verify/${verificationToken}`;
    const msg = `
      <div>
        <h2>Hello, ${name}!</h2>
        <p>Please click the link below to verify your email:</p>
        <a href="${verifyUrl}" style="padding: 10px; background-color: #4CAF50; color: white; text-decoration: none;">Verify Email</a>
      </div>
    `;
    mailer.sendMail(email, "Verify Email", msg);

    return res.status(201).json({
      success: true,
      msg: "User registered successfully , Please check your email to verify your account.",
      user: userData,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyValue && error.keyValue.email) {
      return res.status(400).json({
        success: false,
        msg: "Email already exists",
      });
    }
    res.status(500).json({
      success: false,
      msg: error.message,
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

    // Check if the user already exists
    let user = await userModel.findOne({ email });

    // If the user does not exist, create a new one
    if (!user) {
      user = new userModel({ isVerified: true, ...req.body });
      await user.save();
    }

    // Generate an access token
    const token = await user.generateAccessToken();

    // Set the token in the cookie with secure options
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
      message: err.message || "Internal server error during login",
      success: false,
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Check if the user is verified
    if (!user.isVerified) {
      return res.status(401).json({ msg: "Please verify your email first" });
    }

    console.log("Entered Password:", password);
    console.log("Hashed Password:", user.password);

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log("Password match status:", isPasswordMatch);

    // if (!isPasswordMatch) {
    //   return res.status(401).json({ msg: "Invalid email or password" });
    // }

    // Generate token or proceed with login logic
    const token = user.generateAccessToken();

    return res.status(200).json({
      success: true,
      token,
      msg: "Login successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { userRegister, signinWithGoogleController, userLogin };
