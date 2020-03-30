const Agent = require("../models/agent");   // Fetch the Agent Database Model
const bcrypt = require("bcryptjs")      // To encrypt password
const User = require("../models/users");
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
    // const img = req.body.image;
    // const url = req.protocol + '://' + req.get("host");
    // const image = req.file;
    // console.log(img, image);

    // if (!image) {
    //     return res.status(401).json({
    //         message : 'Image is not valid'
    //     });
    // }
    
    Agent.findOne({email : email})      // Finds if email already exist in the database;
    .then(user => {
        if(user) {
            return res.status(401).json({
                message: "Email already exist!"
            })
        }
        //  Encrypt new user password
        return bcrypt.hash(password, 12).then(hashPassword => {
            // create new user
            const newUser = new Agent({
                name : name,
                email: email,
                // image: url + '/images/' + image.filename,
                password: hashPassword
            });
            newUser.save()
            .then(result => {
                res.status(200).json({
                    agent : result
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
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
}

// Get All Agents
exports.getAgents = (req, res, next) => {
    Agent.find().sort({_id: -1})
    .then(agents => {
        res.status(200).json({
            agents: agents
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
}

exports.getUsers = (req, res, next) => {
    User.find().populate('agentId').sort({_id : -1})
    .then(users => {
        res.status(200).json({
            users : users
        })
    })
    .catch(err => {
        res.status(500).json({
            message : err
        })
    })
}

exports.postUserApproval = (req, res, next) => {
    const approval = req.body.approval;
    const userId = req.params.userId;
    User.findOne({_id:userId})
    .then(user => {
        if(!user) {
            return res.status(401).json({
                message: "An error occured"
            })
        }
        
        user.approve = approval
        return user.save()
        .then(result => {
            res.status(200).json({
                user : result
            });
            return transporter.sendMail({
                to: user.email,
                from: 'approval@ecard.com',
                subject: 'Ecard Approval Confirmation',
                html: `
                   <p>Approval Successful</p>
                   <p>This is to notify you that your registration was successful and your account has been approved. Your default password is 12345678. Congratulations.</p>
                `
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