const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MenuSchema = new Schema(
  
  {
    foods: String,
    drinks: String,
    date: String,
  },
  { timestamps: true }

)

module.exports = mongoose.model("Menu", MenuSchema)
