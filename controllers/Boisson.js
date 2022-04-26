const Boisson = require('../daoModels/Boisson')

// creation nouvelle Boisson 
exports.CreateBoisson = (req, res) => {
   try {
      const boisson = new Boisson({
         ...req.body,
      })
      boisson
      .save()
      .then((newBoisson) => {
         return res.status(201).json(
            {  message: ' votre Boisson a été enregistrée  avec success ! ',
               Boisson: {
                  libellé: newBoisson.label,
                  prix: `${newBoisson.price} FCFA`,
                  Catégorie : newBoisson.category,
               }
          })
      })
      .catch((err)=>{
         res.status(400).send('Echec creation de la nouvelle Boisson.')
      })
   } catch (error) {
       res.status(500).json('Oups ... une erreur est survenue lors de la creation de la Boisson !')
   }
}


// Recuperation liste des Boissons existantes
exports.GetAllBoisson = (req, res) => {
   Boisson.find()
      .then((Boissonlist) => {
         return res.status(200).json({
            Boissonlist   
         })
      })
      .catch((e) => {
         res.status(500).send(" Aucune Boisson n'a été trouvée ")
      })
}


// Suppresion d'une seule Boisson
exports.DeleteBoisson = (req, res) => {
    Boisson.findById( req.params.BoissonId )
      .then((boisson) => {
         boisson.deleteOne({ _id: req.params.BoissonId }, (err) => {
               if (!err) {
                  return res
                     .status(200)
                     .json(`Le Boisson a bien été supprimée de la liste !`)
               }
               else {
                  res.status(403).json({erreur: ` une Erreur est survenue lors de la suppresion de la Boisson `})
               }
            }
         )
      })
      .catch((e) => {
         res.status(500).send(" Aucune Boisson n'a été trouvée ")
      })
}


// Update un Boisson
exports.UpdateBoisson = (req, res) => {
    Boisson.findById(req.params.BoissonId)
      .then((boisson) => {
         boisson.updateOne({ $set: req.body }, (err) => {
            if (!err) {
               return res
                  .status(200)
                  .json({
                     message: 'La Boisson a bien été mise à jour',
                  })
            } else {
               res.status(401).json(' une erreur est survenue lors de la mise à jour de la Boisson ')
            }
         })
      })
      .catch((e) => {
         res.status(500).send(" Aucune Boisson n'a été trouvée ")
      })
}