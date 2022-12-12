//Create Table into DB

import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      distance: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true
      },
      image1: {
        type: String,
        required: true
      },
      image2: {
        type: String,
        required: true
      },
      image3: {
        type: String,
        required: true
      },
      image4: {
        type: String,
        required: true
      },
      image5: {
        type: String,
        required: true
      },
      image6: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      rooms: {
        type: [String],
      },
      cheapestPrice: {
        type: Number,
        required: true,
      },
      featured: {
        type: Boolean,
        default: false,
      },
});

export default mongoose.model("Hotel", HotelSchema);