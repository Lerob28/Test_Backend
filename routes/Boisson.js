const router = require('express').Router()

const {
   GetAllBoisson, UpdateBoisson, CreateBoisson, DeleteBoisson,
} = require('../controllers/Boisson')


router.post('/new', CreateBoisson)
router.get('/', GetAllBoisson)
router.delete('/rem/:BoissonId', DeleteBoisson)
router.put('/refresh/:BoissonId', UpdateBoisson)


module.exports = router