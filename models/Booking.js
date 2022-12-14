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
    userId: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    hotelId: {
        type: String,
        require: true
    },
    hotelname: {
        type: String,
        require: true
    },
   phone: {
        type: String,
        require: true
    },
    PaymentDate: {
        type: String,
        require: true
    },
    fromDate: {
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
        default: 'Đang xử lý'
    }
}, 
    { timestamps: true }
)

export default mongoose.model('Booking', bookingSchema);
