import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch(err) {

        next(err);

    }
};

export const updateHotel = async (req, res, next) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedHotel);
    } catch (err) {
      next(err);
    }
}

export const getHotel = async (req, res, next) => {
    try {

        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);

    } catch(err) {

        next(err);

    }
};

export const getAllHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 0, $lt: max || 100000000 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };

export const byCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {

        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city});
        }));
        res.status(200).json(list);

    } catch(err) {

        next(err);

    }
};

export const byType = async (req, res, next) => {
    try {

        const allHotels = await Hotel.countDocuments({type: "Hotel"});
        const allApartments = await Hotel.countDocuments({type: "Apartment"});
        const allResorts = await Hotel.countDocuments({type: "Resort"});
        const allVillas = await Hotel.countDocuments({type: "Villa"});
        const allCabins = await Hotel.countDocuments({type: "Cabin"});
        
        res.status(200).json([
            {type: "Hotel", count: allHotels},
            {type: "Apartment", count: allApartments},
            {type: "Resort", count: allResorts},
            {type: "Villa", count: allVillas},
            {type: "Cabin", count: allCabins}
        ]);

    } catch(err) {

        next(err);

    }
};

export const getHotelsRoom = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map(room => {
            return Room.findById(room);
        }));
        res.status(200).json(list);

    } catch(err) {

        next(err);

    }
}

export const deleteHotel = async (req, res, next) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted.");
    } catch (err) {
      next(err);
    }
  };