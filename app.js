// importation des modules
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


// importation des variables d'environnement Node
const dotenv = require('dotenv')
dotenv.config()
const DataBase = process.env.MongoConnect



// creation du serveur express
const app = express(); 


// importation fichiers de routing
const MenuRoutes = require("./routes/Menu");
const BoissonRoutes = require("./routes/Boisson");
const platsRoutes = require("./routes/Plats")
const CommandeRoutes = require("./routes/Commande");



// database connexion
mongoose
   .connect( 'mongodb://localhost/Restaurant', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log(`app is succefuly connected to your Database...`)
   })
   .catch((e) => {
      console.error(`error when trying to connect with your data base : ${e}`)
   })



app.use(express.json()); // body parser
app.use(cors()); // cors


// utilisation des middlewares pour faire correspondre aux routes
app.use("/api/Menu", MenuRoutes);
app.use("/api/Boisson", BoissonRoutes);
app.use("/api/Plats", platsRoutes);
app.use("/api/Commande", CommandeRoutes);

module.exports = app;
