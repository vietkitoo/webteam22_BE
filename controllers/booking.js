import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import moment from 'moment';
import Stripe from 'stripe';


export const newBooking = async(req,res) => {
    const {
        room,
        roomId,
        userId,
        username,
        fromDate,
        toDate,
        totalPrice,
        totalDays,

    } = (req.body);

    try{
        const newBooking = new Booking({
            room: room,
            roomId: roomId,
            userId,
            username,
            fromDate: moment(fromDate).format('DD-MM-YY'),
            toDate : moment(toDate).format('DD-MM-YY'),
            totalPrice,
            totalDays,
            transactionId : '1234',
        });

        const booking = await newBooking.save()
        const id = req.body.roomId
        res.send('Đặt phòng thành công');
    } catch (error) {
        return res.status(400).json({ error});
    }
};

export const getBooking = async (req, res, next) => {
    try {
     const bookings = await Booking.find({userId : req.params.id})
      res.status(200).json(bookings);
    } catch (err) {
      next(err);
    }
};

export const getAllBooking = async (req, res, next) => {
    try {

        const bookings = await Booking.find()
        res.status(200).json(bookings);

    } catch(err) {

        next(err);

    }
};