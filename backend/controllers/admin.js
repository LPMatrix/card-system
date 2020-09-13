const Agent = require("../models/agent"); // Fetch the Agent Database Model
const bcrypt = require("bcryptjs") // To encrypt password
const User = require("../models/users");
const Admin = require('../models/admin');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_APIKEY
    }
}));
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken)
// Add a new User
exports.postAddAgent = async (req, res, next) => {
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
    try {
        const user = await Agent.findOne({
            email: email
        });
        if (user) {
            return res.status(401).json({
                message: "Email already exist!"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new Agent({
            name: name,
            email: email,
            image: url + '/images/' + image.filename,
            password: hashedPassword
        })
        const result = await newUser.save();
        res.status(200).json({
            message: "Agent account has been created successfully!",
            agent: result
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}


exports.getAgentUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate('agentId').sort({
            _id: -1
        })
        const agents = await Agent.find().sort({
            _id: -1
        })
        res.status(200).json({
            users: users,
            agents: agents
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.postUserApproval = async (req, res, next) => {
    // const approval = req.body.approval;
    try {
        const userId = req.params.userId;
        const user = await User.findOne({
            _id: userId
        }).populate('agentId');
        if (!user) {
            return res.status(401).json({
                message: "An error occured"
            })
        }
        user.approved = !user.approved;
        const result = await user.save()
        if (result.approved) {
            const sendSms = await client.messages.create({
                body: 'You account has been approved by Digicapture. Please login to register.',
                from:'+19124522011',
                to: '+2348157984273'
            });
            // console.log(sendSms);
            const sendMail = transporter.sendMail({
                to: user.email,
                from: 'approval@ecard.ng',
                subject: 'Ecard Approval Confirmation',
                html: `
                       <p>Dear ${user.firstname},</p>
                       <br>
                       <p>This is to notify you that your account has been activated successful. Click on this <a href='http://localhost:4200/login'>link</a> to login. Congratulations.</p>
                    `
            })
        }
        res.status(200).json({
            user: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.postProfile = async (req, res, next) => {
    try {
        const password = req.body.password;
        const newpassword = req.body.newpassword;
        if (password === newpassword) {
            return res.status(401).json({
                message: "Password does not match!"
            });
        }

        const user = await Admin.findOne({
            _id: req.admin._id
        })
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
        const doMatch = await bcrypt.compare(password, user.password);
        if (!doMatch) {
            return res.status(401).json({
                message: "Password does not match!"
            })
        }
        const hashPassword = await bcrypt.hash(newpassword, 12);
        user.password = hashPassword;
        const result = await user.save()
        res.status(200).json({
            message: "Changed has been updated!"
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }

}

exports.getUserAgentCount = async (req, res, next) => {
    try {
        const userCount = await User.find({
            approved: true
        }).countDocuments();
        const agentCount = await Agent.find().countDocuments();
        res.status(200).json({
            userCount: userCount,
            agentCount: agentCount
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.postAgentStatus = async (req, res, next) => {
    try {
        const agentId = req.body.agentId;
        const user = await Agent.findOne({
            _id: agentId
        })
        if (!user) {
            return res.status(401).json({
                message: "An error occured"
            })
        }
        user.is_active = !user.is_active;
        const result = await user.save();
        res.status(200).json({
            agent: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.deleteAgent = async (req, res, next) => {
    try {

        const agentId = req.params.agentId;
        const result = await Agent.findOneAndDelete({
            _id: agentId
        });
        if (!result) {
            return res.status(401).json({
                message: 'An error occured!'
            })

        }
        res.status(200).json({
            message: 'Deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
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

exports.getAgentRegisteredAccounts = async (req, res, next) => {
    try {
        const agentId = req.params.agentId;
        const users = await User.find({
            agentId: agentId
        })
        res.status(200).json({
            users: users
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.getUsersByUnit = async (req, res, next) => {
    try {
        const unit = req.body.unit;
        const users = await User.find({
            unit: unit
        });
        res.status(200).json({
            users: users
        });

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const uniqueId = req.body.uniqueId;
        const user = User.findOne({
            uniqueId: uniqueId
        });
        if (!user) {
            return res.status(401).json({
                message: "Opps! Unable to fetch user."
            })
        }
        res.status(200).json({
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}