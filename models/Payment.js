const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: String,
  },
});

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
