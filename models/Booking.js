import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    roomId: {
        type: [String],
        require: true
    },
    hotel:{
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    fullname:{
        type: String,
        require:true,
    },
    fromDate: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    request: {
        type: String
    },
    toDate: {
        type: String,
        require: true
    },
    totalPrice: {
        type: Number,
        require: true
    },
    totalDays: {
        type: Number,
        require: true
    },
    transactionId: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
        default: 'đang thanh toán'
    }
}, 
    { timestamps: true }
)

export default mongoose.model('Booking', bookingSchema);
