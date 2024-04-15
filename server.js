const express = require("express")
const mongoose = require("mongoose")

const hotelRouter = require("./routes/hotel.router")
const hotelDataAddedToDBRouter = require("./routes/dataimport.router")

const connectDB = require("./config/dbconfig")

const app = express()

app.use(express.json())
connectDB()

const PORT = 4000
app.get("/", (req, res) => {
  res.send("hello everyone")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter)
app.use("/api/hotels", hotelRouter)

mongoose.connection.once("open", () => {
  console.log("DB connected")
  app.listen(process.env.PORT || PORT, () => {
    console.log("server is running")
  })
})
