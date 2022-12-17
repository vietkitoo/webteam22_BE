//Create Table into DB

import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    image1: {
        type: String,
     
    },
    image2: {
        type: String,

    },
    image3: {
        type: String,
      
    },
    image4: {
        type: String,
    
    },
    image5: {
        type: String,
       
    },
    image6: {
        type: String,
       
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    rooms: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model("Hotel", HotelSchema);