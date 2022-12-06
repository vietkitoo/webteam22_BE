import express from 'express'
const router = express.Router();
import { newBooking } from '../controllers/booking';


router.post("/booking" , newBooking )

