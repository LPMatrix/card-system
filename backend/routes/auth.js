const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/agent/login', authController.postAgentLogin);

/*
  Admin Authentication Begins
*/

router.post('/admin/login', authController.postAdminLogin);
module.exports = router
