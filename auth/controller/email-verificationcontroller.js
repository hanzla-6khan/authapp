const userModel = require("../model/userModel");

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    // Find the user with the verification token
    const user = await userModel.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "Invalid or expired token",
      });
    }

    // Update user's `isVerified` status
    user.isVerified = true;
    user.verificationToken = ""; // Clear the token after verification
    await user.save();

    return res.status(200).json({
      success: true,
      msg: "Email verified successfully. You can now log in.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { verifyEmail };
