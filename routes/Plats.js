const router = require('express').Router()

const {
   GetAllPlats, UpdatePlats, CreatePlats, DeletePlats,
} = require('../controllers/Plats')


router.post('/new', CreatePlats)
router.get('/', GetAllPlats)
router.delete('/rem/:PlatsId', DeletePlats)
router.put('/refresh/:PlatsId', UpdatePlats)


module.exports = router