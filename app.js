const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Payment = require("./models/Payment");
const port = 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const db = process.env.DATABASE_URL;
app.use(express.json());
mongoose
  .connect(db)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.post("/payments", async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    return res.status(201).json({ msg: "Created succesfful", payment });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/pay", (req, res) => {
  res.status(200).json({ message: "You are about to initiate the payment" });
});
app.listen(port, () => console.log(`app listening to por:${port}`));
