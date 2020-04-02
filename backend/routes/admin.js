
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const isAdminAuth = require('../middleware/isAdminAuth');
const adminData = require('../middleware/adminData');
const file = require('../middleware/file');

router.post('/agent', [isAdminAuth, adminData, file], adminController.postAddAgent);
router.post('/agent/user/approve/:userId', [isAdminAuth, adminData], adminController.postUserApproval);
router.post('/agent/account', [isAdminAuth, adminData], adminController.postAgentStatus);
router.post('/profile', [isAdminAuth, adminData], adminController.postProfile);
// router.get('/agent', [isAdminAuth, adminData], adminController.getAgents);
router.get('/counts', [isAdminAuth, adminData], adminController.getUserAgentCount);
router.delete('/agent/remove/:agentId', [isAdminAuth, adminData], adminController.deleteAgent);
router.get('/agents-users', [isAdminAuth, adminData], adminController.getAgentUsers);

module.exports = router;