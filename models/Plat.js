const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PlatSchema = new Schema(
  
  {
    price: Number,
    delivery: Boolean,
    CreatingDate: { type: String, default: Date.now() },
    userId: Number,
  }

)

module.exports = mongoose.model("Plat", PlatSchema)
