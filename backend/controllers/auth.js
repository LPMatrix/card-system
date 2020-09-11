const Agent = require('../models/agent');
const Admin = require('../models/admin');
const User = require('../models/users');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));

/*
  User Authentication Begins
*/
exports.postUserLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
            email: email
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Access Denied!"
                });
            }
            if (!user.approve) {
                return res.status(401).json({
                    message: 'Waiting for verfication.'
                })
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (!doMatch) {
                        return res.status(401).json({
                            message: "Access Denied!"
                        });
                    }
                    const token = jwt.sign({
                        name: user.firstname,
                        userId: user._id
                    }, 'secret_key_should_be_longer', {
                        expiresIn: '1h'
                    });

                    res.status(200).json({
                        token: token,
                        expiresIn: "3600",
                        user: user
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "Sorry, we couldn't complete your request. Please try again in a moment."
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        })
}
exports.postUserReset = (req, res, next) => {
    const email = req.body.email;
    crypto.randomBytes(32, (err, Buffer) => {
        if (err) {
            return res.status(401).json({
                message: 'An unknown error occured'
            })
        }
        const token = Buffer.toString('hex');
        User.findOne({
                email: email
            })
            .then(user => {
                if (!user) {
                    return res.status(401).json({
                        message: 'Email does not exist!'
                    });
                }
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 3600000;
                return user.save()
                    .then(result => {
                        transporter.sendMail({
                            to: email,
                            from: 'reset@ecard.ng',
                            subject: 'Reset Password',
                            html: `
                               <p>Reset password request</p>
                               <p>Dear ${user.firstname}</p>
                               <p>Click this <a href='http://localhost:4200/reset/${token}'>link</a> to reset your password</p>
                            `
                        });
                        res.status(200).json({
                            message: 'Kindly check your mail for further directives.  Thank you.'
                        })

                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "Sorry, we couldn't complete your request. Please try again in a moment."
                        })
                    });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Sorry, we couldn't complete your request. Please try again in a moment."
                })
            });

    })

}
exports.getUserNewpassword = (req, res, next) => {
    const token = req.params.token;
    User.findOne({
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid Token!'
                });
            }
            res.status(200).json({
                resetToken: token,
                userId: user._id
            });

        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        });

}
exports.postUserNewPassword = (req, res, next) => {
    const token = req.params.token;
    const newPassword = req.body.password;
    const userId = req.body.userId;
    let authorizedUser;
    User.findOne({
            _id: userId,
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid user! Try again!'
                })
            }
            authorizedUser = user;
            return bcrypt.hash(newPassword, 12)
                .then(hashedPassword => {
                    user.password = hashedPassword;
                    user.resetToken = undefined;
                    user.resetTokenExpiration = undefined;
                    return user.save()
                        .then(result => {
                            transporter.sendMail({
                                to: user.email,
                                from: 'success@ecard.ng',
                                subject: 'Password reset successful',
                                html: '<p>You have successfully changed your password!</p>'
                            });
                            res.status(200).json({
                                message: 'Passwprd reset successful'
                            })
                            
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: "Sorry, we couldn't complete your request. Please try again in a moment."
                            })
                        });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "Sorry, we couldn't complete your request. Please try again in a moment."
                    })
                })

        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500
            return next(error);
        });
}

/*
  Agent Authentication Begins
*/
exports.postAgentLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Agent.findOne({
            email: email
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Access Denied!"
                });
            }
            if (!user.is_active) {
                return res.status(401).json({
                    message: 'Your account has been suspended. Kindly contact the administrator for further directives.'
                })
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (!doMatch) {
                        return res.status(401).json({
                            message: "Access Declined!"
                        });
                    }
                    const token = jwt.sign({
                        name: user.name,
                        agentId: user._id
                    }, 'secret_key_should_be_longer', {
                        expiresIn: '1h'
                    });

                    res.status(200).json({
                        token: token,
                        expiresIn: "3600",
                        agent : user
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "Sorry, we couldn't complete your request. Please try again in a moment."
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        })
}
exports.postAgentReset = (req, res, next) => {
    const email = req.body.email;
    crypto.randomBytes(32, (err, Buffer) => {
        if (err) {
            return res.status(401).json({
                message: 'An unknown error occured'
            })
        }
        const token = Buffer.toString('hex');
        Agent.findOne({
                email: email
            })
            .then(user => {
                if (!user) {
                    return res.status(401).json({
                        message: 'Email does not exist!'
                    });
                }
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 3600000;
                return user.save()
                    .then(user => {
                        res.status(200).json({
                            message: 'Kindly check your mail for further directives.  Thank you.'
                        })
                        transporter.sendMail({
                            to: user.email,
                            from: 'success@ecard.ng',
                            subject: 'Password reset successful',
                            html: '<p>You have successfully changed your password!</p>'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "Sorry, we couldn't complete your request. Please try again in a moment."
                        })
                    });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Sorry, we couldn't complete your request. Please try again in a moment."
                })
            });

    })

}
exports.getAgentNewpassword = (req, res, next) => {
    const token = req.params.token;
    Agent.findOne({
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid Token!'
                });
            }
            res.status(200).json({
                resetToken: token,
                agentId: user._id
            });

        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        });

}
exports.postAgentNewPassword = (req, res, next) => {
    const token = req.body.token;
    const newPassword = req.body.password;
    const agentId = req.body.agentId;
    let authorizedUser;
    Agent.findOne({
            _id: agentId,
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        })
        .then(user => { 
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid Agent! Try again!'
                })
            }
            authorizedUser = user;
            return bcrypt.hash(newPassword, 12)
                .then(hashedPassword => {
                    user.password = hashedPassword;
                    user.resetToken = undefined;
                    user.resetTokenExpiration = undefined;
                    return user.save()
                        .then(result => {

                            res.status(200).json({
                                message: 'Passwprd reset successful'
                            })
                            transporter.sendMail({
                                to: user.email,
                                from: 'success@ecard.ng',
                                subject: 'Password reset successful',
                                html: '<p>You have successfully changed your password!</p>'
                            });
                            
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: "Sorry, we couldn't complete your request. Please try again in a moment."
                            })
                        });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "Sorry, we couldn't complete your request. Please try again in a moment."
                    })
                })

        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        });
}

/*
  Admin Authentication Begins
*/
exports.postAdminLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Admin.findOne({
            email: email
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Access Denied!'
                })
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (!doMatch) {
                        return res.status(401).json({
                            message: "Access Declined!"
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
                        message: "Sorry, we couldn't complete your request. Please try again in a moment."
                    });
                })
        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            });
        })
}
exports.postAdminReset = (req, res, next) => {
    const email = req.body.email;
    crypto.randomBytes(32, (err, Buffer) => {
        if (err) {
            return res.status(401).json({
                message: 'An unknown error occured'
            })
        }
        const token = Buffer.toString('hex');
        Admin.findOne({
                email: email
            })
            .then(user => {
                if (!user) {
                    return res.status(401).json({
                        message: 'Email does not exist!'
                    });
                }
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 3600000;
                return user.save()
                    .then(user => {
                        res.status(200).json({
                            message: 'Kindly check your mail for further directives.  Thank you.'
                        })
                        // return transporter.sendMail({
                        //   to: email,
                        //   from: 'ecard@gmail.com',
                        //   subject: 'Reset Password',
                        //   html: `
                        //      <p>Reset password request</p>
                        //      <p>Click this <a href='http://localhost:4200/reset/${token}'>link</a> to reset your password</p>
                        //   `
                        // });
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "Sorry, we couldn't complete your request. Please try again in a moment."
                        })
                    });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Sorry, we couldn't complete your request. Please try again in a moment."
                })
            });

    })

}
exports.getAdminNewpassword = (req, res, next) => {
    const token = req.params.token;
    Admin.findOne({
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid Token!'
                });
            }
            res.status(200).json({
                resetToken: token,
                adminId: user._id
            });

        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        });

}
exports.postAdminNewPassword = (req, res, next) => {
    const token = req.body.resetToken;
    const newPassword = req.body.password;
    const adminId = req.body.adminId;
    let authorizedUser;
    Agent.findOne({
            _id: adminId,
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid Agent! Try again!'
                })
            }
            authorizedUser = user;
            return bcrypt.hash(newPassword, 12)
                .then(hashedPassword => {
                    user.password = hashedPassword;
                    user.resetToken = undefined;
                    user.resetTokenExpiration = undefined;
                    return user.save()
                        .then(result => {
                            res.status(200).json({
                                message: 'Passwprd reset successful'
                            })
                            // return transporter.sendMail({
                            //     to: user.email,
                            //     from: 'shop@penzaar.com',
                            //     subject: 'Password reset successful',
                            //     html: '<p>You have successfully changed your password. Keep shopping!</p>'
                            // });
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: "Sorry, we couldn't complete your request. Please try again in a moment."
                            })
                        });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "Sorry, we couldn't complete your request. Please try again in a moment."
                    })
                })

        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        });
}