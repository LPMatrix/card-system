const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/agent/login', authController.postAgentLogin);

router.post('/user/login', authController.postUserLogin);

/*
  Admin Authentication Begins
*/

router.post('/admin/login', authController.postAdminLogin);
module.exports = router
