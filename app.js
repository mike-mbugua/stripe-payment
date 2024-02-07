require("dotenv").config();
const express = require("express");
const app = express();
const Payment = require("./models/Payment");
const port = 5000;
const mongoose = require("mongoose");
const db = process.env.DATABASE_URL;
mongoose
  .connect(db)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.get("/pay", (req, res) => {
  res.status(200).json({ message: "You are about to initiate the payment" });
});
app.listen(port, () => console.log(`app listening to por:${port}`));
