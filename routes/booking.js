import express from 'express'

const router = express.Router();
import { newBooking, getAllBooking , getBookingId, UpdateBooking} from '../controllers/booking.js';
import { isAdmin } from '../utils/verifyToken.js';


router.post('/' , newBooking );
router.get('/', isAdmin, getAllBooking);
router.get('/:id', getBookingId);
router.put('/:id/update',isAdmin, UpdateBooking);
export default router;