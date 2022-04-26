const Commande = require('../daoModels/Commande')

// creation nouvelle Commande 
exports.CreateCommande = (req, res) => {
   try {
      const commande = new Commande({
         ...req.body,
      })
      commande
      .save()
      .then((newCommande) => {
         return res.status(201).json(
            {  message: ' Commande enregistrée  avec success ! ',
               détail_de_la_commande: {
                  plat: newCommande.foods,
                  Jour_de_Livraison: newCommande.delivery_day,
                  Heure_de_Livraison: newCommande.delivery_time,
                  Lieu_de_livraison: newCommande.delivery_place,
                  Numero_Client: newCommande.Customer_Number,
               }
          })
      })
      .catch((err)=>{
         res.status(400).send('Echec lors de la création de la Commande.')
      })
   } catch (error) {
       res.status(500).json('Oups ... une erreur est survenue lors de la creation de la Commande !')
   }
}


// Recuperation liste des Commandes existantes
exports.GetAllCommande = (req, res) => {
   Commande.find()
      .then((Commandelist) => {
         return res.status(200).json({
            Commandelist   
         })
      })
      .catch((e) => {
         res.status(500).send(" Aucune Commande n'a été trouvée ")
      })
}


// Suppresion d'une seule Commande
exports.DeleteCommande = (req, res) => {
    Commande.findById( req.params.CommandeId )
      .then((Commande) => {
         Commande.deleteOne({ _id: req.params.CommandeId }, (err) => {
               if (!err) {
                  return res
                     .status(200)
                     .json(`La Commande a bien été supprimée de la liste !`)
               }
               else {
                  res.status(403).json({erreur: ` une Erreur est survenue lors de la suppresion de la Commande `})
               }
            }
         )
      })
      .catch((e) => {
         res.status(500).send(" Aucune Commande n'a été trouvée ")
      })
}


// Update d'une Commande enregistrée
exports.UpdateCommande = (req, res) => {
    Commande.findById(req.params.CommandeId)
      .then((Commande) => {
         Commande.updateOne({ $set: req.body }, (err) => {
            if (!err) {
               return res
                  .status(200)
                  .json({
                     message: 'Le Commande a bien été mise à jour',
                  })
            } else {
               res.status(401).json(' une erreur est survenue lors de la mise à jour du Commande ')
            }
         })
      })
      .catch((e) => {
         res.status(500).send(" Aucune Commande n'a été trouvée ")
      })
}