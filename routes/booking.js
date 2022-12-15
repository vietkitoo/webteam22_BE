import express from 'express'

const router = express.Router();
import { newBooking, getBooking, getAllBooking , getBookingAdmin, UpdateBooking} from '../controllers/booking.js';


router.post('/' , newBooking );

router.get('/', getAllBooking);
router.get('/:id', getBookingAdmin);
router.put('/:id/update', UpdateBooking);
export default router;