const User = require("../models/users"); // Fetch the Users Database Model
const bcrypt = require("bcryptjs") // To encrypt password
const crypto = require("crypto");
const Agent = require("../models/agent");
// Add a new User
exports.postAddUser = (req, res, next) => {
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const zone = req.body.zone;
    const unit = req.body.unit;
    const phone_no = req.body.phone_no;
    const state = req.body.state;
    const vehicle_no = req.body.vehicle_no;
    const password = "12345678";

    crypto.randomBytes(5, (err, Buffer) => {
        if (err) {
            return res.status(401).json({
                message: 'An unknown error occured!'
            });
        }
        const uniqueId = "usr-" + Buffer.toString('hex');
        return bcrypt.hash(password, 12)
            .then(hashedPassword => {
                return User.findOne({
                        email: email
                    })
                    .then(user => {
                        if (user) {
                            return res.status(401).json({
                                message: "Email already exist!"
                            })
                        }
                        const newUser = new User({
                            firstname: firstname,
                            middlename: middlename,
                            lastname: lastname,
                            email: email,
                            gender: gender,
                            dob: dob,
                            zone: zone,
                            unit: unit,
                            phone_no: phone_no,
                            state: state,
                            vehicle_no: vehicle_no,
                            uniqueId: uniqueId,
                            password: hashedPassword,
                            agentId: req.user._id

                        });
                        newUser.save()
                            .then(result => {
                                console.log(result);
                                res.status(200).json({
                                    user: result
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: err
                                });
                            })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: err
                        })
                    });
            })
            .catch(err => {
                res.status(500).json({
                    message: err
                })
            })

    })

}

// Get all users

exports.getUsers = (req, res, next) => {
    User.find().populate('agentId').sort({
            _id: -1
        })
        .then(users => {
            // console.log(users);
            res.status(200).json({
                users: users
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

exports.getProfile = (req, res, next) => {
    Agent.findOne({
            _id: req.user._id
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "User not authenticated! Please login..."
                });
            }
            res.status(200).json({
                user: user
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

exports.postProfile = (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    if (password === confirmpassword) {
        return res.status(401).json({
            message: "Password does not match!"
        });
    }

    Agent.findOne({
            _id: req.user._id
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Authentication failed"
                })
            }
            if (password !== "") {
                return bcrypt.compare(password, user.password)
                    .then(doMatch => {
                        if (!doMatch) {
                            return res.status(401).json({
                                message: "Password does not match!"
                            })
                        }
                        return bcrypt.hash(password, 12)
                            .then(hashPassword => {
                                user.name = name;

                                user.password = hashPassword;
                                return user.save()
                                    .then(result => {
                                        res.status(200).json({
                                            message: "Change Successful",
                                            user: result
                                        })
                                    })
                                    .catch(err => {
                                        res.status(500).json({
                                            message: err
                                        })
                                    })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: err
                                })
                            })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: err
                        })
                    })
            } else {
                user.name = name;
                return user.save()
                    .then(result => {
                        res.status(200).json({
                            message: "Change Successful",
                            user: result
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: err
                        })
                    })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

exports.getUserCount = (req, res, next) => {
    User.find({approve : true}).countDocuments() 
    .then(userCount => {
        res.status(200).json({
            userCount : userCount
        })
    })
    .catch(err => {
        res.status(500).json({
            message : err
        })
    })
}