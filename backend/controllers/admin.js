const Agent = require("../models/agent"); // Fetch the Agent Database Model
const bcrypt = require("bcryptjs") // To encrypt password
const User = require("../models/users");
const Admin = require('../models/admin');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));
// Add a new User
exports.postAddAgent = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    var proto = req.connection.encrypted ? 'https' : 'http';
    const url = proto + '://' + req.get("host");
    const image = req.file;
    // console.log(img, image);

    if (!image) {
        return res.status(401).json({
            message: 'Image is not valid'
        });
    }

    Agent.findOne({
            email: email
        }) // Finds if email already exist in the database;
        .then(user => {
            if (user) {
                return res.status(401).json({
                    message: "Email already exist!"
                })
            }
            //  Encrypt new user password
            return bcrypt.hash(password, 12).then(hashPassword => {
                    // create new user
                    const newUser = new Agent({
                        name: name,
                        email: email,
                        image: url + '/images/' + image.filename,
                        password: hashPassword
                    });
                    newUser.save()
                        .then(result => {
                            res.status(200).json({
                                message: "Agent account has been created successfully!",
                                agent: result
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
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        })
}

// Get All Agents
exports.getAgents = (req, res, next) => {

}

exports.getAgentUsers = (req, res, next) => {
    User.find().populate('agentId').sort({
            _id: -1
        })
        .then(users => {
            return Agent.find().sort({
                    _id: -1
                })
                .then(agents => {
                    res.status(200).json({
                        users: users,
                        agents: agents
                    })
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

exports.postUserApproval = (req, res, next) => {
    // const approval = req.body.approval;
    const userId = req.params.userId;
    User.findOne({
            _id: userId
        }).populate('agentId')
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "An error occured"
                })
            }


            user.approved = !user.approved;
            return user.save()
                .then(result => {
                    if (result.approved) {

                        return transporter.sendMail({
                                to: user.email,
                                from: 'approval@ecard.ng',
                                subject: 'Ecard Approval Confirmation',
                                html: `
                       <p>Dear ${user.firstname},</p>
                       <br>
                       <p>This is to notify you that your account has been activated successful. Click on this <a href='http://localhost:4200/login'>link</a> to login. Congratulations.</p>
                    `
                            })
                            .then(output => {
                                res.status(200).json({
                                    user: result
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: 'An error occured. Please check your connection and try again'
                                })
                            });
                    }
                    res.status(200).json({
                        user: result
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

exports.postProfile = (req, res, next) => {
    const password = req.body.password;
    const confirmpassword = req.bidy.confirmpassword;

    if (password !== confirmpassword) {
        return res.status(401).json({
            message: 'Password does not match'
        })
    }
    Admin.findOne()
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Authentication failed'
                })
            }
            return bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (!doMatch) {
                        return res.status(401).json({
                            message: "Password does not match!"
                        })
                    }
                    return bcrypt.hash(password, 12)
                        .then(hashPassword => {
                            user.password = hashPassword;
                            return user.save()
                                .then(result => {
                                    res.status(200).json({
                                        message: "Password changed successfully",
                                        user: result
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

exports.postProfile = (req, res, next) => {
    const password = req.body.password;
    const newpassword = req.body.newpassword;
    if (password === newpassword) {
        return res.status(401).json({
            message: "Password does not match!"
        });
    }

    Admin.findOne({
            _id: req.admin._id
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Authentication failed"
                })
            }
            return bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (!doMatch) {
                        return res.status(401).json({
                            message: "Password does not match!"
                        })
                    }
                    return bcrypt.hash(newpassword, 12)
                        .then(hashPassword => {
                            user.password = hashPassword;
                            return user.save()
                                .then(result => {
                                    res.status(200).json({
                                        message: "Changed has been updated!"
                                    })
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

exports.getUserAgentCount = (req, res, next) => {
    User.find({
            approved: true
        }).countDocuments()
        .then(userCount => {
            return Agent.find().countDocuments()
                .then(agentCount => {
                    res.status(200).json({
                        userCount: userCount,
                        agentCount: agentCount
                    })
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

exports.postAgentStatus = (req, res, next) => {
    const agentId = req.body.agentId;
    Agent.findOne({
            _id: agentId
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "An error occured"
                })
            }
            user.is_active = !user.is_active;
            return user.save()
                .then(result => {
                    res.status(200).json({
                        agent: result
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

exports.deleteAgent = (req, res, next) => {
    const agentId = req.params.agentId;
    Agent.findOneAndDelete({
            _id: agentId
        })
        .then(result => {
            // console.log(result)
            if (!result) {
                return res.status(401).json({
                    message: 'An error occured!'
                })

            }
            res.status(200).json({
                message: 'Deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, we couldn't complete your request. Please try again in a moment."
            })
        })
}

exports.postEditUserDetails = (req, res, next) => {
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const surname = req.body.surname;
    const email = req.body.email;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const address = req.body.address;
    const next_of_kin_name = req.body.next_of_kin_name;
    const next_of_kin_address = req.body.next_of_kin_address;
    const next_of_kin_phone_no = req.body.next_of_kin_phone_no;
    const vehicleNumber = req.body.vehicleNumber;
    const transportation_type = req.body.transportation_type;
    const verifiedIdType = req.body.verifiedIdType;
    const verifiedId = req.body.verifiedId;
    const zone = req.body.zone;
    const phone_no = req.body.phone_no;
    var proto = req.connection.encrypted ? 'https' : 'http';
    const url = proto + '://' + req.get("host");
    const name = firstname.toLowerCase() + "-" + middlename.toLowerCase();
    const ext = "jpeg";
    const imageName = name + '-' + Date.now() + '.' + ext;
    const image = req.body.image;
    var base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
    fs.writeFile("backend/images/" + imageName, base64Data, 'base64', function (err) {
        if (err) {
            res.status(401).json({
                message: 'Error occured while uploading the image!'
            })
        }


        return User.findOne({
                email: email
            })
            .then(user => {
                if (!user) {
                    return res.status(401).json({
                        message: "An error occured"
                    })
                }

                user.firstname = firstname;
                user.middlename = middlename;
                user.surname = surname;
                user.email = email;
                user.gender = gender;
                user.dob = dob;
                user.address = address;
                user.next_of_kin_name = next_of_kin_name;
                user.next_of_kin_address = next_of_kin_address;
                user.next_of_kin_phone_no = next_of_kin_phone_no;
                user.vehicleNumber = vehicleNumber;
                user.transportation_type = transportation_type;
                user.verifiedIdType = verifiedIdType;
                user.verifiedId = verifiedId;
                user.zone = zone;
                user.phone_no = phone_no;
                user.image = url + '/images/' + imageName;

                user.save()
                    .then(result => {
                        res.status(200).json({
                            message: 'Update Successful.',
                            user: result
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            message: "Sorry, we couldn't complete your request. Please try again in a moment."
                        });
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: "Sorry, we couldn't complete your request. Please try again in a moment."
                })
            });


    });


}