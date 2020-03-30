const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agent");
const agentData = require("../middleware/agentData");
const isAgentAuth = require("../middleware/isAgentAuth");

router.post('/user', [isAgentAuth, agentData], agentController.postAddUser);
router.get('/user', [isAgentAuth, agentData], agentController.getUsers);

module.exports = router;