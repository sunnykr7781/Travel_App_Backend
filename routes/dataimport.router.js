const express = require("express")

const Hotel = require("../model/hotel.model")
const hotels = require("../data/hotels")

const router = express.Router()

router.route("/").post(async (req, res) => {
    try {
        const hotelsInDB = [];
        for (const hotel of hotels.data) {
          const hotelDoc = new Hotel(hotel);
          const savedHotel = await hotelDoc.save();
          hotelsInDB.push(savedHotel);
        }
        res.json(hotelsInDB);
      } catch (err) {
    console.log(err)
    res.json({ message: "could not add data to DB" })
  }
})
module.exports = router;


  