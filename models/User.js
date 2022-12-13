<<<<<<< Updated upstream
//Create Table into DB

import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      country: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
);

=======
//Create Table into DB

import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      country: {
        type: String,
      },
      img: {
        type: String,
      },
      city: {
        type: String,
      },
      phone: {
        type: String,
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
);

>>>>>>> Stashed changes
export default mongoose.model("Users", UsersSchema);