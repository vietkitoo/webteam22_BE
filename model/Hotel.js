//tao ra data trong DB
import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    photo: {
        type: [String]
    },
    rating: {
        type: Number,
        min: 0,
        max: 100
    },
    desc: {
        type: String,
        require: true
    },
    room: {
        type: [String],

    },
    price: {
        type: Number,
        require: false
    },
    feature: {
        type: Boolean,
        default: false
    },

});

export default mongoose.model("Room", HotelSchema)