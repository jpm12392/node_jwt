const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController'); // Import the post controller



// Get All User Data
router.post('/', loginController.userLogin);


module.exports = router;