const express = require("express")
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userControllers')
const { registerRelative, updateRelative, getRelatives } = require('../controllers/relativeControllers')
const protect = require('../middlewares/protect')


router.route('/register/').post(registerUser)
router.route('/login/').post(loginUser)
router.route('/relatives/').post(protect, registerRelative).get(protect, getRelatives)
router.route('/relatives/:id').put(protect, updateRelative)

module.exports = router;