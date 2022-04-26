const Plats = require('../daoModels/Plat')

// creation nouveau Plats 
exports.CreatePlats = (req, res) => {
   try {
      const plats = new Plats({
         ...req.body,
      })
      plats
      .save()
      .then((newPlats) => {
         return res.status(201).json(
            {  message: ' Plat enregistré  avec success ! ',
               Plats: {
                  prix: newPlats.price,
                  livraison: newPlats.delivery==="true"? "oui" : "non",
                  date_Création : newPlats.CreatingDate,
                  créé_par : newPlats.userId,
               }
          })
      })
      .catch((err)=>{
         res.status(400).send('Echec de la creation du Plat.')
      })
   } catch (error) {
       res.status(500).json('Oups ... une erreur est survenue lors de la creation du Plat !')
   }
}


// Recuperation liste des Plats existants
exports.GetAllPlats = (req, res) => {
   Plats.find()
      .then((Platslist) => {
         return res.status(200).json({
            Platslist   
         })
      })
      .catch((e) => {
         res.status(500).send(" Aucun Plat n'a été trouvé ")
      })
}


// Suppresion d'un seul Plats
exports.DeletePlats = (req, res) => {
    Plats.findById( req.params.PlatsId )
      .then((Plats) => {
         Plats.deleteOne({ _id: req.params.PlatsId }, (err) => {
               if (!err) {
                  return res
                     .status(200)
                     .json(`Le Plat a bien été supprimé de la liste !`)
               }
               else {
                  res.status(403).json({erreur: ` une Erreur est survenue lors de la suppresion du Plat `})
               }
            }
         )
      })
      .catch((e) => {
         res.status(500).send(" Aucun Plat n'a été trouvé ")
      })
}


// Update un Plats
exports.UpdatePlats = (req, res) => {
   Plats.findById(req.params.PlatsId)
   .then((Plats) => {
      Plats.updateOne({ $set: req.body }, (err) => {
         if (!err) {
            return res
               .status(200)
               .json({
                  message: 'Le Plat a bien été mise à jour',
               })
         } else {
            res.status(401).json(' une erreur est survenue lors de la mise à jour du Plat ')
         }
      })
   })
   .catch((e) => {
      res.status(500).send(" Aucun Plat ne correspond a l'identifiant envoyé ")
   })
}