const router = require('express').Router()

const {
   GetAllMenu, UpdateMenu, CreateMenu, DeleteMenu,
} = require('../controllers/Menu')


router.post('/new', CreateMenu)
router.get('/', GetAllMenu)
router.delete('/rem/:MenuId', DeleteMenu)
router.put('/refresh/:MenuId', UpdateMenu)


module.exports = router
