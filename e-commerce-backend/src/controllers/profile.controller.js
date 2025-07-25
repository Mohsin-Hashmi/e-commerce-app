const Profile = require("../models/profile");
const createProfile = async (req, res) => {
  try {
    const { fullName, phoneNumber } = req.body;
    const profileImage = req.file.path;

    const newProfile = new Profile({
      fullName,
      phoneNumber,
      profileImage,
    });

    await newProfile.save();
    return res.status(201).json({
      success: true,
      message: "Profile Created Successfully",
      profile: newProfile,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "ERR: " + err.message,
    });
  }
};

module.exports = createProfile;
