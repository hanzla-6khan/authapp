const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please use a valid email address",
      ],
    },
    password: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    googleId: {
      type: String,
      default: "",
    },
    profile: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
// Encrypt password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate AccessToken
userSchema.methods.generateAccessToken = async function () {
  const token = await jwt.sign(
    {
      _id: this._id,
      isVerified: this.isVerified,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
      address: this.address,
      phone: this.phone,
      profile: this.profile,
    },
    process.env.TOKEN_SECRET_KEY,
    {
      expiresIn: 60 * 60 * 24,
    }
  );
  return token;
};
module.exports = mongoose.model("User", userSchema);
