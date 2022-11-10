import express from 'express'
import { createHotel, getallHotel, getHotel } from '../controller/hotel.js';


//Tao hotel
const router = express.Router();
router.post('/', createHotel);

//Tim kiem theo id
router.get('/:id', getHotel);
//Tim tat ca hotel
router.get('/', getallHotel);
export default router;