const router = require('express').Router()

const {
   GetAllCommande, UpdateCommande, CreateCommande, DeleteCommande,
} = require('../controllers/Commande')


router.post('/new', CreateCommande)
router.get('/', GetAllCommande)
router.delete('/rem/:CommandeId', DeleteCommande)
router.put('/refresh/:CommandeId', UpdateCommande)


module.exports = router