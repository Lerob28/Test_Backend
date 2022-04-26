const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PlatSchema = new Schema(
  
  {
    price: Number,
    delivery: Boolean,
    CreatingDate: { type: String, default: Date(Date.now()) },
    userId: Number,
  },
  { timestamps: true }

)

module.exports = mongoose.model("Plat", PlatSchema)
