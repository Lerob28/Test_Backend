const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommandeSchema = new Schema(
  
  {
    foods: String,
    delivery_day: String,
    delivery_time: String,
    delivery_place: String,
    Customer_Number: String,
  }

)

module.exports = mongoose.model("Commande", CommandeSchema)
