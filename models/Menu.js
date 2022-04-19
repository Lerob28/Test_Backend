const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MenuSchema = new Schema(
  
  {
    foods: String,
    drinks: String,
    date: String,
  }

)

module.exports = mongoose.model("Menu", MenuSchema)
