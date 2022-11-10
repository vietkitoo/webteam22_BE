import Hotel from "../model/Hotel.js";

export const createHotel = async (req, res, next) => {
     const newhotel = new Hotel(res.body);
    try {
        const savehotel = await newhotel.save();
        res.status(200).json(savehotel);
    }
    catch (error) {
        next(error);
    }
}
  
export const getHotel = async (req, res, next) => {
       try {
        const hotel = await Hotel.findbyID(req.params.id);
        res.status(200).json(hotel);
    }
    catch (error) {
        next(error);
    }
}

export const getallHotel = async (req, res, next) => {
       try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }
    catch (error) {
         next(error);
    }
}
  