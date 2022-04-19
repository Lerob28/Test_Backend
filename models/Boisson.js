const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BoissonSchema = new Schema(
  
  {
    label: String,
    price: Number,
    category: String,
  }

)

module.exports = mongoose.model("Boisson", BoissonSchema)
