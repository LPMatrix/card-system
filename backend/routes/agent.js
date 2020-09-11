const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agent");
const agentData = require("../middleware/agentData");
const isAgentAuth = require("../middleware/isAgentAuth");
const file = require('../middleware/file');

router.post('/user', [isAgentAuth, agentData], agentController.postAddUser);
router.get('/user', [isAgentAuth, agentData], agentController.getUsers);
router.get('/counts', [isAgentAuth, agentData], agentController.getUserCount);
router.get('/profile', [isAgentAuth, agentData], agentController.getProfile);
router.post('/profile', [isAgentAuth, agentData], agentController.postProfile);
router.post('/password/change', [isAgentAuth, agentData], agentController.postChangePassword);

module.exports = router;