import Booking from "../models/Booking";
import Room from "../models/Room";
const moment = require ("moment");
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

        const roomtemp = await Room.findOne({_id : room._id})

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