import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";


export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try{

        const savedRoom = await newRoom.save();

        try {
            //find hotel and add room
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            });
        } catch(err) {
            next(err);
        }

        res.status(200).json(savedRoom);

    } catch(err) {
        next(err);
    }
}

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: 
        {
          title: req.body.title,
          price:req.body.price,
          desc:req.body.desc,
          maxPeople:req.body.maxPeople,
          roomNumbers: req.body.roomNumbers
        }    
                 },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
}

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Phòng đã được cập nhật");
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};


export const getTypeRoom = async (req, res, next) => {
    try {

        const room = await Room.findById(req.params.id);
        res.status(200).json(room);

    } catch(err) {

        next(err);

    }
};

export const getAllRooms = async (req, res, next) => {
    try {

        const rooms = await Room.find()
        res.status(200).json(rooms);

    } catch(err) {

        next(err);

    }
};

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Phòng đã được xóa");
    } catch (err) {
      next(err);
    }
  };