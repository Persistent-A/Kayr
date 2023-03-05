const express = require("express")
const router = express.Router()
const {registerUser, loginUser, registerPatient} = require('../controllers/userControllers')
const protect = require('../middlewares/protect')


router.route('/register/').post(registerUser)
router.route('/login/').post(loginUser)
router.route('/patients/').post(protect, registerPatient)

module.exports = router;