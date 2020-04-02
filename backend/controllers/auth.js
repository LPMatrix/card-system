const Agent = require('../models/agent');
const Admin = require('../models/admin');
const User = require('../models/users');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');

exports.postAgentLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Agent.findOne({email : email})
    .then(user => {
        if(!user) {
            return res.status(401).json({
                message : "Access Denied!"
            });
        }
        if(!user.is_active) {
            return res.status(401).json({
                message : 'Your account has been suspended. Kindly contact the administrator for further directives.'
            })
        }
        bcrypt.compare(password, user.password)
        .then(doMatch => {
            if(!doMatch) {
                return res.status(401).json({
                    message : "Access Declined!"
                });
            }
            const token = jwt.sign({
                name: user.name,
                agentId : user._id
            }, 'secret_key_should_be_longer', {
                expiresIn: '1h'
            });

            res.status(200).json({
                token: token,
                expiresIn: "3600",
                name : user.name,
                image : user.image
            });
        })
        .catch(err => {
            res.status(500).json({
                message : err
            })
        })
    })
    .catch(err => {
        res.status(500).json({
            message : err
        })
    })
}

exports.postAdminLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Admin.findOne({email : email})
    .then(user => {
        if(!user) {
            return res.status(401).json({
                message : 'Access Denied!'
            })
        }
        bcrypt.compare(password, user.password)
        .then(doMatch => {
            if(!doMatch) {
                return res.status(401).json({
                    message : "Access Declined!"
                });
            }
            const token = jwt.sign({
                adminId: user._id
              }, 'secret_to_the_admin_must_not_be_known', {
                expiresIn: '1h'
              });
            res.status(200).json({
                token: token,
                expiresIn: "3600"
            });
        })
        .catch(err => {
            res.status(500).json({
                message : err
            });
        })
    })
    .catch(err => {
        res.status(500).json({
            message : err
        });
    })
}
exports.postUserLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email : email})
    .then(user => {
        if(!user) {
            return res.status(401).json({
                message : "Access Denied!"
            });
        }
        if(!user.approve) {
            return res.status(401).json({
                message : 'Waiting for verfication.'
            })
        }
        bcrypt.compare(password, user.password)
        .then(doMatch => {
            if(!doMatch) {
                return res.status(401).json({
                    message : "Access Denied!"
                });
            }
            const token = jwt.sign({
                name: user.firstname,
                userId : user._id
            }, 'secret_key_should_be_longer', {
                expiresIn: '1h'
            });

            res.status(200).json({
                token: token,
                expiresIn: "3600",
                name : user.firstname + " " + user.lastname,
                image : user.image
            });
        })
        .catch(err => {
            res.status(500).json({
                message : err
            })
        })
    })
    .catch(err => {
        res.status(500).json({
            message : err
        })
    })
}