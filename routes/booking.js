import express from 'express'

const router = express.Router();
import { newBooking, getBooking, getAllBooking } from '../controllers/booking.js';


router.post('/' , newBooking );
router.get('/:id', getBooking);
router.get('/', getAllBooking);

export default router;