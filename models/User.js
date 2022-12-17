//Create Table into DB

import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      fullname:{
        type: String,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      country: {
        type: String,
        default: "",
      },
      img: {
        type: String,
      },
      city: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      currentbookings : [],
    },
    { timestamps: true }
);

export default mongoose.model("Users", UsersSchema);