import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import moment from 'moment';
import Stripe from 'stripe';


export const newBooking = async(req,res) => {
    const {
        room,
        userId,
        fromDate,
        toDate,
        totalPrice,
        totalDays,

    } = (req.body);

    try{
        const newBooking = new Booking({
            room: room.name,
            roomId: room._id,
            userId,
            fromDate: moment(fromDate).format('DD-MM-YY'),
            toDate : moment(toDate).format('DD-MM-YY'),
            totalPrice,
            totalDays,
            transactionId : '1234',
        });

        const booking = await newBooking.save()
        const id = req.body.roomId
        const roomtemp = await Room.findOne({id : room._id})

        roomtemp.currentbookings.push({
            bookingid: booking._id, 
            fromDate: moment(fromDate).format('DD-MM-YY'), 
            toDate: moment(toDate).format('DD-MM-YY'),
            userId : userId,
            status : booking.status
        });
        await roomtemp.save()
        res.send('Đặt phòng thành công');
    } catch (error) {
        return res.status(400).json({ error});
    }
};

export const getBooking = async (req, res, next) => {
    const user = await User.findOne({userId: req.body.userId});
    try {
     const bookings = await Booking.find({userId : userId})
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

export const UpdateBooking = async (req, res, next) =>{
    try {
      const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        { $set: 
          {
            status: req.body.status,
          }    
                   },
        { new: true }
      );
      res.status(200).json(booking);
    } catch (err) {
      next(err);
    }
  }


  export const getBookingAdmin = async (req, res, next) => {
    try {
      const booking = await Booking.findById(req.params.id);
      res.status(200).json(booking);
    } catch (err) {
      next(err);
    }
  };