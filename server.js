const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const hotelRouter = require("./routes/hotel.router")
const hotelDataAddedToDBRouter = require("./routes/dataimport.router")
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router")
const categoryRouter = require("./routes/category.router")
const singleHotelrouter = require("./routes/singlehotel.router")
const authRouter = require("./routes/auth.router")
const wishlistrouter = require("./routes/wishlist.router")
const connectDB = require("./config/dbconfig")

const app = express()

app.use(express.json())
connectDB()

const PORT = 4000
app.get("/", (req, res) => {
  res.send("Server is running")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter)
app.use("/api/categorydata", categoryDataAddedToDBRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/category", categoryRouter)
app.use("/api/hotels", singleHotelrouter)
app.use("/api/auth", authRouter)
app.use("/api/wishlist", wishlistrouter)

mongoose.connection.once("open", () => {
  console.log("DB connected")
  app.listen(process.env.PORT || PORT, () => {
    console.log("server is running")
  })
})
