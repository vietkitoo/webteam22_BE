import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    room: {
        type: String,
        require: true
    },
    roomId: {
        type: String,
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
    timepayment:{
        type: String,
        require: true
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
