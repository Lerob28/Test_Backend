const Menu = require('../daoModels/Menu')

// creation nouveau Menu 
exports.CreateMenu = (req, res) => {
   try {
      const menu = new Menu({
         ...req.body,
      })
      menu
      .save()
      .then((newMenu) => {
         return res.status(201).json(
            {  message: ' Menu enregistré  avec success ! ',
               menu: {
                  plats: newMenu.foods,
                  Boissons: newMenu.drinks,
                  date_prévue_pour_le_menu : newMenu.date,
               }
          })
      })
      .catch((err)=>{
         res.status(400).send('Echec de la creation du Menu.')
      })
   } catch (error) {
       res.status(500).json('Oups ... une erreur est survenue lors de la creation du menu !')
   }
}


// Recuperation liste des Menus existants
exports.GetAllMenu = (req, res) => {
   Menu.find()
      .then((Menulist) => {
         return res.status(200).json({
            Menulist   
         })
      })
      .catch((e) => {
         res.status(500).send(" Aucun Menu n'a été trouvé ")
      })
}


// Suppresion d'un seul Menu
exports.DeleteMenu = (req, res) => {
    Menu.findById( req.params.MenuId )
      .then((menu) => {
         Menu.deleteOne({ _id: req.params.MenuId }, (err) => {
               if (!err) {
                  return res
                     .status(200)
                     .json(`Le Menu a bien été supprimé de la liste !`)
               }
               else {
                  res.status(403).json({erreur: ` une Erreur est survenue lors de la suppresion du Menu `})
               }
            }
         )
      })
      .catch((e) => {
         res.status(500).send(" Aucun Menu n'a été trouvé ")
      })
}


// Update un Menu
exports.UpdateMenu = (req, res) => {
    Menu.findById(req.params.MenuId)
      .then((menu) => {
         Menu.updateOne({ $set: req.body }, (err) => {
            if (!err) {
               return res
                  .status(200)
                  .json({
                     message: 'Le Menu a bien été mise à jour',
                  })
            } else {
               res.status(401).json(' une erreur est survenue lors de la mise à jour du Menu ')
            }
         })
      })
      .catch((e) => {
         res.status(500).send(" Aucun Menu n'a été trouvé ")
      })
}