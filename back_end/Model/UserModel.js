const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Role = {
  ADMIN: 'ADMIN',
  BIDDER: "BIDDER",
  SELLER: "SELLER",
};
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  
  fullName: {
    type: String,
    required: [true, "Your Fullname is required"],
  },

  phoneNumber: {
    type: String,
    required: [true, "Your phone number is required"],
  },

  address: {
    type: String,
    required: [true, "Your address is required"],
  },

  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  role: {
    type: String,
    enum: [Role.ADMIN, Role.BIDDER, Role.SELLER],
    default: Role.BIDDER
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  budget: {
    type: Number,
    required: true,
    default: 0
  }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);