const User = require("../models/users"); // Fetch the Users Database Model
const bcrypt = require("bcryptjs") // To encrypt password
const crypto = require("crypto");
const Agent = require("../models/agent");
const fs = require('fs');
// Add a new User
exports.postAddUser = (req, res, next) => {
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const surname = req.body.surname;
    const email = req.body.email;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const address = req.body.address;
    const branch = req.body.branch;
    const next_of_kin_name = req.body.next_of_kin_name;
    const next_of_kin_address = req.body.next_of_kin_address;
    const next_of_kin_phone_no = req.body.next_of_kin_phone_no;
    const vehicleNumber = req.body.vehicleNumber;
    const transportation_type = req.body.transportation_type;
    const verifiedIdType = req.body.verifiedIdType;
    const verifiedId = req.body.verifiedId;
    const fingerprint_image = req.body.fingerprint_image;
    const fingerprint_encode = req.body.fingerprint_encode;
    const signature = req.body.signature;
    const zone = req.body.zone;
    const unit = req.body.unit;
    const phone_no = req.body.phone_no;
    const state = req.body.state;
    const uniqueId = req.body.uniqueId;
    const password = "12345678";
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
                            surname: surname,
                            email: email,
                            gender: gender,
                            dob: dob,
                            address: address,
                            branch: branch,
                            next_of_kin_name: next_of_kin_name,
                            next_of_kin_address: next_of_kin_address,
                            next_of_kin_phone_no: next_of_kin_phone_no,
                            vehicleNumber: vehicleNumber,
                            transportation_type: transportation_type,
                            verifiedIdType: verifiedIdType,
                            verifiedId: verifiedId,
                            zone: zone,
                            unit: unit,
                            phone_no: phone_no,
                            state: state,
                            uniqueId: uniqueId,
                            password: hashedPassword,
                            agentId: req.user._id,
                            image: url + '/images/' + imageName

                        });
                        newUser.save()
                            .then(result => {
                                res.status(200).json({
                                    message: 'User account has been generated and awaiting approval.',
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
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: "Sorry, we couldn't complete your request. Please try again in a moment."
                })
            })

    });




}

// Get all users

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find({
            agentId: req.user._id
        }).sort({
            _id: -1
        });
        res.status(200).json({
            users: users
        })

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getProfile = async (req, res, next) => {
    try {
        const user = await Agent.findOne({
            _id: req.user._id
        });
        if (!user) {
            return res.status(401).json({
                message: "User not authenticated! Please login..."
            });
        }
        res.status(200).json({
            agent: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.postProfile = async (req, res, next) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        const newpassword = req.body.newpassword;
        const user = await Agent.findOne({
            _id: req.user._id
        });
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed. Please login again."
            })
        }
        if (password !== null) {
            const doMatch = await bcrypt.compare(password, user.password);
            if (!doMatch) {
                return res.status(401).json({
                    message: "Password does not match!"
                })
            }
            const hashPassword = await bcrypt.hash(newpassword, 12);
            user.name = name;
            user.password = hashPassword;
            const result = await user.save();
            res.status(200).json({
                message: "Profile has been updated!",
                agent: result
            });
        } else {
            user.name = name;
            const result = await user.save();
            res.status(200).json({
                message: "Password has been changed!",
                agent: result
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postChangePassword = async (req, res, next) => {
    try {
        const password = req.body.password;
        const newpassword = req.body.newpassword;
        const user = await Agent.findOne({
            _id: req.user._id
        });
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
        if (password !== null) {
            const doMatch = await bcrypt.compare(password, user.password);
            if (!doMatch) {
                return res.status(401).json({
                    message: "Password does not match!"
                })
            }
            const hashPassword = await bcrypt.hash(newpassword, 12);
            user.password = hashPassword;
            const result = await user.save();
            res.status(200).json({
                message: "Password Changed Successfully!"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.getUserCount = async (req, res, next) => {
    try {
        const userCount = await User.find({
            approved: true
        }).countDocuments();
        res.status(200).json({
            userCount: userCount
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}