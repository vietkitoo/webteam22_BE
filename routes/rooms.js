import express from 'express'
import { createRoom, getAllRooms, updateRoom, deleteRoom, getRoom, getTypeRoom , updateRoomAvailability} from '../controllers/rooms.js';
import { isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//For add new rooms, only admin can add a new room
router.post('/:hotelId', isAdmin, createRoom); //only als admin login can you add hotels

//Update Room
router.put("/availability/:id",  updateRoomAvailability);

router.put("/:id/update",  updateRoom);
//For get room by id
router.get('/:id', getRoom);

router.get('/typeroom/:id', getTypeRoom);

//For get all rooms
router.get('/', getAllRooms);

//Delete room
router.delete("/:id", isAdmin, deleteRoom);

export default router;