const express = require("express")
const Wishlist = require("../model/wishlist.model")
const verifyUser = require("../middlewares/verifyuser")

const router = express.Router()

router.route("/").post(verifyUser, async (req, res) => {
  const newWishlist = new Wishlist(req.body)
  try {
    const savedWishlist = await newWishlist.save()
    res.status(201).json(savedWishlist)
  } catch (err) {
    res.status(500).json({ message: "wishlist not created" })
  }
})

router.route("/:id").delete(verifyUser, async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id)
    res.json({ message: "hotel deleted from wishlist" })
  } catch (err) {
    res.status(500).json({ message: " could not delete hotel from wishlist" })
  }
})

router.route("/").get(verifyUser, async (req, res) => {
  try {
    const wishlist = await Wishlist.find({})
    wishlist
      ? res.json(wishlist)
      : res.json({ message: "no hotels found in wishlist" })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})
module.exports = router
