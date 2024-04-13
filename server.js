const express = require("express")
const hotelRouter = require("./routes/hotel.router")
const app = express()

app.use(express.json())

const PORT = 4000
app.get("/", (req, res) => {
  res.send("hello everyone")
})

app.use("/api/hotels", hotelRouter)

app.listen(process.env.PORT || PORT, () => {
  console.log("server is running")
})
